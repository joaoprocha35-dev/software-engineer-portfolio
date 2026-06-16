import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';

/**
 * Componente Contact
 * Gerencia a seção de contato do portfólio.
 * Contém um layout de duas colunas: uma com informações e links sociais,
 * e outra contendo um formulário que envia mensagens reais via EmailJS.
 */
const Contact = () => {
    // Estado para armazenar os dados digitados no formulário
    const [formData, setFormData] = useState({
        nome: '',
        assunto: '',
        mensagem: ''
    });

    // Estado para controlar o fluxo de envio assíncrono (evita múltiplos cliques)
    const [loading, setLoading] = useState(false);

    // Estado para renderizar mensagens de feedback de sucesso ou erro para o usuário
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    /**
     * Atualiza o estado formData de forma dinâmica com base no 'name' do input modificado.
     */
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    /**
     * Trata a submissão do formulário, integrando as variáveis de ambiente com o SDK do EmailJS.
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage({ type: '', text: '' }); // Reseta mensagens anteriores

        // Recupera as chaves geradas no painel do EmailJS a partir das variáveis de ambiente do Vite
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_ibmqqaf';
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_darnh6g';
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ycM68Gmazh2a0MyU9';

        // Mapeia os dados informados para os campos esperados pelo template do EmailJS
        const templateParams = {
            nome: formData.nome,
            assunto: formData.assunto,
            mensagem: formData.mensagem,
        };

        // Envia o e-mail utilizando a API do EmailJS
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setStatusMessage({ type: 'success', text: 'Mensagem enviada com sucesso!' });
                setFormData({ nome: '', assunto: '', mensagem: '' }); // Limpa o formulário após o sucesso
            })
            .catch((err) => {
                console.error('FAILED...', err);
                setStatusMessage({ type: 'error', text: 'Ocorreu um erro ao enviar. Tente novamente mais tarde.' });
            })
            .finally(() => {
                setLoading(false); // Libera os botões e inputs novamente
            });
    };

    return (
        <section className={styles.contatoSection}>
            <div className={styles.sobreContent} data-aos="fade-up">
                
                {/* CABEÇALHO DA SEÇÃO UNIFICADO */}
                <header className="text-center mb-5">
                    <h2 className={styles.tituloPrincipal}>Contato</h2>
                    <div className={styles.linhaDecorativa}></div>
                </header>

                <div className="row align-items-center g-5">

                    {/* LADO ESQUERDO: INFORMAÇÕES E REDES */}
                    <div className="col-12 col-lg-5">
                        <div className={styles.infoBlock}>
                            <span className={styles.stepNumber}>VAMOS CONVERSAR?</span>
                            <h3 className={styles.itemTitulo}>Tem um projeto em mente ou uma vaga?</h3>
                            <p className={styles.itemDescricao}>
                                Estou sempre aberto a novas oportunidades e desafios. Preencha o formulário ao lado ou entre em contato diretamente pelas redes sociais.
                            </p>

                            <div className={styles.socialLinks}>
                                <a
                                    href="https://www.linkedin.com/in/delmiro-rocha-b668043b0/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.socialIcon}
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedinIn />
                                </a>

                                <a
                                    href="https://github.com/joaoprocha35-dev"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.socialIcon}
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* LADO DIREITO: FORMULÁRIO DE CONTATO */}
                    <div className="col-12 col-lg-7">
                        <div className={styles.formularioCard}>
                            <form onSubmit={handleSubmit} className="row g-4">

                                {/* Campo de Entrada: Nome */}
                                <div className="col-md-6">
                                    <label htmlFor="nome" className={styles.labelForm}>Seu Nome</label>
                                    <input
                                        type="text"
                                        className={styles.inputForm}
                                        id="nome"
                                        name="nome"
                                        required
                                        value={formData.nome}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        disabled={loading}
                                    />
                                </div>

                                {/* Campo de Entrada: Assunto */}
                                <div className="col-md-6">
                                    <label htmlFor="assunto" className={styles.labelForm}>Assunto</label>
                                    <input
                                        type="text"
                                        className={styles.inputForm}
                                        id="assunto"
                                        name="assunto"
                                        required
                                        value={formData.assunto}
                                        onChange={handleChange}
                                        placeholder="Oportunidade / Parceria"
                                        disabled={loading}
                                    />
                                </div>

                                {/* Campo de Entrada: Mensagem */}
                                <div className="col-12">
                                    <label htmlFor="mensagem" className={styles.labelForm}>Mensagem</label>
                                    <textarea
                                        className={styles.textareaForm}
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

                                {/* FEEDBACK DINÂMICO DE STATUS */}
                                {statusMessage.text && (
                                    <div className="col-12">
                                        <div className={`alert ${statusMessage.type === 'success' ? 'alert-success' : 'alert-danger'} ${styles.alertMessage} d-block`} role="alert">
                                            {statusMessage.text}
                                        </div>
                                    </div>
                                )}

                                {/* Botão de Envio Estilizado */}
                                <div className="col-12 text-end">
                                    <button type="submit" className={styles.ctaBotao} disabled={loading}>
                                        <span>{loading ? 'Enviando...' : 'Enviar Mensagem'}</span>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;