'use client'
import "./css/estilo.css";
import "./javascript/java";

const TrailFinder = () => {
    return(
        <>
            <section>
              <h2>Nos diga mais sobre você:</h2>

                <form onSubmit="return validarForm()"></form>
                    <label for="nome">Nome:</label><br />
                    <input type="text" id="nome" name="nome" />
                    <br/><br/>

                    <label for="rg">RG (Apenas os Números):</label><br/>
                    <input type="text" id="rg" name="rg"/><br/><br/>

                    <label for="tipoEmpresa">Tipo de Empresa:</label><br/>
                    <select id="tipoEmpresa" name="tipoEmpresa">
                        <option value="">Qual?</option>
                        <option value="Pequena">Pequena</option>
                        <option value="Média">Média</option>
                        <option value="Grande">Grande</option>
                    </select><br/><br/>
                    

                    <label itemType="setor">Setor:</label><br/>
                    <select id="setor" name="setor">
                        <option value="">Qual?</option>
                        <option value="Automotivo">Automotivo</option>
                        <option value="Comunicações">Comunicações</option>
                        <option value="Bens de Consumo">Bens de Consumo</option>
                        <option value="Educação">Educação</option>
                        <option value="Energia & Utilities">Energia & Utilities</option>
                        <option value="Serviços Financeiros">Serviços Financeiros</option>
                        <option value="Saúde & Ciências da Vida">Saúde & Ciências da Vida</option>
                        <option value="Manufatura">Manufatura</option>
                        <option value="Mídia">Mídia</option>
                        <option value="Sem fins lucrativos">Sem fins lucrativos</option>
                        <option value="Setor Público">Setor Público</option>
                        <option value="Varejo">Varejo</option>
                        <option value="Tecnologia">Tecnologia</option>
                    </select><br/><br/>

                    <input type="button" value="Enviar" onclick="validarForm()"/>

                <div id="botoesAgendamento">
                <input type="button" value="Agendar Atendimento Pessoal" onClick="agendarAtendimento()"/>
                <input type="button" value="Esperar Email" onClick="esperarEmail()"/>
                </div>
            </section>
        </>
    )
}
export default TrailFinder;