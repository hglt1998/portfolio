"use client"
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useParams } from 'next/navigation';

type ContactParams = {
  locale: string;
};

const Contact = () => {
  const t = useTranslations('Contact');
  const params = useParams<ContactParams>();
  const locale = params.locale;

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Limpiar errores al editar
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const res = await fetch("/api/send-email", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formData })
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data[locale + '_message']);
        // Resetear formulario después de envío exitoso
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(locale === 'es'
          ? 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.'
          : 'There was an error sending the message. Please try again.');
      }
    } catch (err) {
      setError(locale === 'es'
        ? 'No se pudo conectar con el servidor. Por favor, intenta más tarde.'
        : 'Could not connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {message ? (
        <div className='bg-green-100 border border-green-400 dark:bg-green-900 dark:border-green-600 max-w-3xl mx-auto p-4 text-green-800 dark:text-green-200 rounded-lg shadow-lg'>
          <p className="font-medium">{message}</p>
          <button
            onClick={() => setMessage('')}
            className="mt-2 text-sm underline hover:no-underline"
          >
            {locale === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
          </button>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-indigo-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">
          {t('contactTitle')}
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
          {t('contactIntro')}
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 dark:bg-red-900 dark:border-red-600 text-red-700 dark:text-red-200 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('nameLabel')}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('emailLabel')}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('subject')}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t('messageLabel')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-md bg-blue-600 dark:bg-blue-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {loading ? (
              <svg aria-hidden="true" className="w-5 h-5 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            ) : t('submitButton')}
          </button>
        </form>

        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t('socialTitle')}</h3>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/hglt1998" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
              GitHub
            </a>
            <a href="https://linkedin.com/in/hglt1998" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
              LinkedIn
            </a>
            <a href="mailto:humbertolopezdev@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
              Email
            </a>
          </div>
        </div>
      </div>
      )}
    </main>
  );
};

export default Contact;
