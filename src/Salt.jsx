import { useState } from 'react'
import CryptoJS from 'crypto-js'
import './Salt.css'

function Salt() {
    const [modo, setModo] = useState('enhanced');

    const cifrar = (texto) => {
        var textoCifrado = CryptoJS.AES.encrypt(texto, '12345678').toString();
        return textoCifrado;
    }
    const descifrar = (texto) => {
        var bytes = CryptoJS.AES.decrypt(texto, '12345678');
        var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
        return textoDescifrado;
    }

    if (modo === 'classic') {
        return (
            <>
                <div className="mode-toggle">
                    <button onClick={() => setModo('classic')} className="active">Sin IA</button>
                    <button onClick={() => setModo('enhanced')}>Con IA</button>
                </div>
                <div className="App">
                  <h2>Texto Plano: </h2>
                  
                  <input type="text" id="textoPlano"></input>
                  <p id="textoCifrado">Texto Cifrado</p>
                  <button onClick={() => {
                      var texto = document.getElementById("textoPlano").value;
                      document.getElementById("textoCifrado").innerText = cifrar(texto);
                  }}>
                      Cifrar
                  </button>

                  <p id="textoDescifrado">Texto Descifrado</p>
                  <button onClick={() => {
                      var texto = document.getElementById("textoCifrado").innerText;
                      document.getElementById("textoDescifrado").innerText = descifrar(texto);
                  }}>
                      Descifrar
                  </button>

                </div>
            </>
        )
    }

    return (
        <main className="enhanced-app">
            <div className="enhanced-bg">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-3"></div>
            </div>
            
            <div className="glass-container">
                <header className="enhanced-header">
                    <div className="brand-mark">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
                    </div>
                    <div className="header-text">
                        <p className="eyebrow">Laboratorio de seguridad</p>
                        <h1>Encrypt<span>·</span>Lab</h1>
                    </div>
                    <div className="mode-badge"><span className="pulse-dot"></span> AES-256</div>
                </header>

                <div className="enhanced-toggle">
                    <span>Comparar versión</span>
                    <div className="mode-toggle modern">
                        <button onClick={() => setModo('classic')}>Sin IA</button>
                        <button onClick={() => setModo('enhanced')} className="active">Con IA</button>
                    </div>
                </div>

                <section className="enhanced-intro">
                    <span className="badge-chip">Cifrado simétrico</span>
                    <h2>Protege tus mensajes<br /><span className="text-gradient">en segundos.</span></h2>
                    <p>Escribe un mensaje, genera un texto cifrado y comprueba el resultado al descifrarlo.</p>
                </section>

                <section className="workspace" aria-label="Herramienta de cifrado">
                    <article className="panel input-panel">
                        <div className="panel-heading">
                            <div className="step-circle">1</div>
                            <div><p className="panel-kicker">Entrada</p><h3>Texto plano</h3></div>
                        </div>
                        <label htmlFor="enhanced-textoPlano">Mensaje a proteger</label>
                        <div className="textarea-wrapper">
                            <textarea id="enhanced-textoPlano" placeholder="Escribe aquí tu mensaje secreto..." rows="4" />
                        </div>
                        <div className="panel-footer">
                            <span className="status-text">Mensaje privado</span>
                            <button className="btn-glow" onClick={() => {
                                const texto = document.getElementById('enhanced-textoPlano').value;
                                document.getElementById('enhanced-textoCifrado').innerText = cifrar(texto);
                            }}>
                                Cifrar <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </article>

                    <div className="flow-arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                    </div>

                    <article className="panel output-panel">
                        <div className="panel-heading">
                            <div className="step-circle">2</div>
                            <div><p className="panel-kicker">Resultado</p><h3>Texto cifrado</h3></div>
                        </div>
                        <div className="result-box" id="enhanced-textoCifrado">El resultado aparecerá aquí</div>
                        <div className="panel-footer">
                            <span className="status-text">AES / Base64</span>
                            <button className="btn-secondary" onClick={() => {
                                const texto = document.getElementById('enhanced-textoCifrado').innerText;
                                document.getElementById('enhanced-textoDescifrado').innerText = descifrar(texto);
                            }}>
                                Descifrar <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </div>
                    </article>
                </section>

                <section className="decrypted-panel">
                    <div className="decrypted-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div className="decrypted-content">
                        <p className="panel-kicker">Verificación</p>
                        <h3>Texto descifrado</h3>
                        <p id="enhanced-textoDescifrado" className="decrypted-text">Descifra el resultado para verificar el mensaje.</p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Salt
