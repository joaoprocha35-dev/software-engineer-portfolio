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
        <section className={`container ${styles.contatoSection}`} data-aos="fade-up">
            <div className="row align-items-center g-5">

                {/* LADO ESQUERDO: INFORMAÇÕES E REDES */}
                <div className="col-lg-5">

                    {/* FUNÇÃO DO CARD: CARD/BLOCO DE INFORMAÇÕES DE CONTATO
                        Sua função é preparar o contexto da seção, servindo como uma chamada (CTA) acolhedora.
                        Ele introduz a disponibilidade profissional por meio de textos institucionais e
                        atua como o ponto de ancoragem para os canais alternativos de comunicação (redes sociais).
                    */}
                    <div className={styles.infoBlock}>
                        <span className={styles.subtitle}>VAMOS CONVERSAR?</span>
                        <h2 className={styles.title}>Tem um projeto em mente ou uma vaga?</h2>
                        <p className={styles.description}>
                            Estou sempre aberto a novas oportunidades e desafios. Preencha o formulário ao lado ou entre em contato diretamente pelas redes sociais.
                        </p>

                        <div className={styles.socialLinks}>

                            {/* FUNÇÃO DO MICRO-CARD: CARD DE LINK SOCIAL (LINKEDIN)
                                Atua como um micro-card interativo com efeito hover. Sua função é capturar 
                                o clique do usuário e redirecioná-lo externamente para o perfil do LinkedIn,
                                mantendo a segurança com os atributos rel="noreferrer".
                            */}
                            <a
                                href="https://www.linkedin.com/in/delmiro-rocha-b668043b0/"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.iconCard}
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                            {/* FUNÇÃO DO MICRO-CARD: CARD DE LINK SOCIAL (GITHUB)
                                Semelhante ao anterior, este micro-card interativo isola e destaca visualmente 
                                o atalho para o ecossistema de repositórios do desenvolvedor no GitHub.
                            */}
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

                {/* LADO DIREITO: FORMULÁRIO DE CONTATO DIRETÃO */}
                <div className="col-lg-7">

                    {/* FUNÇÃO DO CARD: CARD DE FORMULÁRIO DE CONTATO (GLASS CARD)
                        Este card possui efeito de "Glassmorphism" (efeito de vidro reflexivo pelo CSS).
                        Sua função técnica fundamental é capturar, validar e enviar as entradas do usuário de 
                        forma segura. Ele centraliza a manipulação lógica dos estados dos inputs, a restrição 
                        de digitação durante o `loading`, e renderiza de forma condicional as caixas de alerta.
                    */}
                    <div className={styles.glassCard}>
                        <form onSubmit={handleSubmit} className="row g-4">

                            {/* Campo de Entrada: Nome */}
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
                                    disabled={loading} // Bloqueia o campo enquanto envia
                                />
                            </div>

                            {/* Campo de Entrada: Assunto */}
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

                            {/* Campo de Entrada: Mensagem (Corpo do e-mail) */}
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

                            {/* FUNÇÃO DO BLOCO: ALERTA DE FEEDBACK / STATUS DA MENSAGEM
                                Renderizado de forma totalmente dinâmica dentro do formulário. 
                                Sua função é interceptar e traduzir visualmente o sucesso ou a falha do 
                                envio da requisição, alternando as classes nativas de alertas do Bootstrap 
                                (`alert-success` ou `alert-danger`) conforme o tipo da resposta da API.
                            */}
                            {statusMessage.text && (
                                <div className="col-12">
                                    <div className={`alert ${statusMessage.type === 'success' ? 'alert-success' : 'alert-danger'} ${styles.alertMessage} d-block`} role="alert">
                                        {statusMessage.text}
                                    </div>
                                </div>
                            )}

                            {/* Botão de Envio com alternância de texto reativo (Loading) */}
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