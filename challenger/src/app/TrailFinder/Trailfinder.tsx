'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import "./css/estilo.css";
import resposta from "./respostas.json"

interface FormData {
    [key: string]: string;
  }
  
  const TrailFinder: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
      name: '',
      rg: '',
      tipoEmpresa: '',
      setor: ''
    });
  
    const [errors, setErrors] = useState<FormData>({});
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const validarForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let errors: FormData = {};
  
      if (!formData.name.trim()) {
        errors.name = 'O nome é obrigatório';
      }
  
      if (!formData.rg.trim() || !/^\d+$/.test(formData.rg)) {
        errors.rg = 'RG inválido';
      }
  
      setErrors(errors);
  
      // Se não houver erros, você pode enviar o formulário
      if (Object.keys(errors).length === 0) {
        console.log('Formulário válido:', formData);
        // Simulando resposta em JSON
        const resposta = {
          status: 'success',
          message: 'Formulário enviado com sucesso!'
        };
        console.log('Resposta em JSON:', resposta);
  
        // Recuperando respostas do localStorage ou criando um array vazio
        const respostasJSON = localStorage.getItem('respostas');
        const respostas: { resposta: { status: string; message: string; } }[] = respostasJSON ? JSON.parse(respostasJSON) : [];
  
        // Adicionando a resposta atual ao array de respostas
        respostas.push({ resposta });
  
        // Atualizando o arquivo JSON com as novas respostas
        const updatedRespostaJSON = JSON.stringify(resposta);
        localStorage.setItem('respostas', updatedRespostaJSON);
  
        // Limpar o formulário após o envio bem-sucedido
        setFormData({
          name: '',
          rg: '',
          tipoEmpresa: '',
          setor: ''
        });
      } else {
        console.log('Formulário inválido');
      }
    };
  
  
    return (
      <section className='secao-total'>
        <form className="form card" onSubmit={validarForm}>
          <div className="card_header">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
            </svg>
            <h1 className="form_heading">Sign in</h1>
          </div>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input className="input" name="name" type="text" placeholder="Nome" id="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="field">
            <label htmlFor="rg">RG</label>
            <input className="input" placeholder="RG" id="rg" name="rg" value={formData.rg} onChange={handleChange} />
            {errors.rg && <span className="error">{errors.rg}</span>}
          </div>
          <label htmlFor="tipoEmpresa">Tipo de Empresa:</label>
          <select id="tipoEmpresa" name="tipoEmpresa" value={formData.tipoEmpresa} onChange={handleChange}>
            <option value="">Qual?</option>
            <option value="Pequena">Pequena</option>
            <option value="Média">Média</option>
            <option value="Grande">Grande</option>
          </select>
          <label htmlFor="setor">Setor:</label>
          <select id="setor" name="setor" value={formData.setor} onChange={handleChange}>
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
          </select>
          <div className="field">
            <button className="button" type="submit">Enviar</button>
          </div>
        </form>
  
      </section>
    );
}
export default TrailFinder;