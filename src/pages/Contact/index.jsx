import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        nome: '',
        assunto: '',
        mensagem: ''
    });

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage({ type: '', text: '' });

        //chaves geradas no painel do EmailJS:
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Os nomes das propriedades aqui devem ser iguais às variáveis {{}} criadas no seu template
        const templateParams = {
            nome: formData.nome,
            assunto: formData.assunto,
            mensagem: formData.mensagem,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatusMessage({ type: 'success', text: 'Mensagem enviada com sucesso!' });
                setFormData({ nome: '', assunto: '', mensagem: '' }); // Limpa o formulário
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatusMessage({ type: 'error', text: 'Ocorreu um erro ao enviar. Tente novamente mais tarde.' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section className={`container ${styles.contatoSection}`} data-aos="fade-up">
            <div className="row align-items-center g-5">

                {/* Lado Esquerdo */}
                <div className="col-lg-5">
                    <div className={styles.infoBlock}>
                        <span className={styles.subtitle}>VAMOS CONVERSAR?</span>
                        <h2 className={styles.title}>Tem um projeto em mente ou uma vaga?</h2>
                        <p className={styles.description}>
                            Estou sempre aberto a novas oportunidades e desafios. Preencha o formulário ao lado ou entre em contato diretamente pelas redes sociais.
                        </p>

                        <div className={styles.socialLinks}>
                            <a
                                href="https://www.linkedin.com/in/delmiro-rocha-b668043b0/"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.iconCard}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/joaoprocha35-dev"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.iconCard}
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Lado Direito */}
                <div className="col-lg-7">
                    <div className={styles.glassCard}>
                        <form onSubmit={handleSubmit} className="row g-4">

                            <div className="col-md-6">
                                <label htmlFor="nome" className="form-label text-light">Seu Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    name="nome"
                                    required
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    disabled={loading}
                                />
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="assunto" className="form-label text-light">Assunto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="assunto"
                                    name="assunto"
                                    required
                                    value={formData.assunto}
                                    onChange={handleChange}
                                    placeholder="Oportunidade / Parceria"
                                    disabled={loading}
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="mensagem" className="form-label text-light">Mensagem</label>
                                <textarea
                                    className="form-control"
                                    id="mensagem"
                                    name="mensagem"
                                    rows="5"
                                    required
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    placeholder="Escreva sua mensagem aqui..."
                                    disabled={loading}
                                ></textarea>
                            </div>

                            {/* Mensagem de Feedback para o Usuário */}
                            {statusMessage.text && (
                                <div className="col-12">
                                    <div className={`alert ${statusMessage.type === 'success' ? 'alert-success text-dark' : 'alert-danger'} d-block`} role="alert">
                                        {statusMessage.text}
                                    </div>
                                </div>
                            )}

                            <div className="col-12 text-end">
                                <button type="submit" className={styles.btnSubmit} disabled={loading}>
                                    {loading ? 'Enviando...' : 'Enviar Mensagem'}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;