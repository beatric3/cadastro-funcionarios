import { useState } from "react";

export default function EmployeeForm(){
    const [form, setForm] = useState({
        nome: "",
        cargo: "",
        cpf:"",
        email:"",
        cep: "",
        rua: "",
        bairro:"",
        cidade:"",
        estado:""
    });
      const [errors, setErrors] = useState({});
      const [loading, setLoading] = useState(false);
      const [loadingCep, setLoadingCep] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

    const buscarCep = async (cep) => {
        const cleanCep = cep.replace(/\D/g, "");

        if (cleanCep.length !== 8) return;

        try {
            setLoadingCep(true);

            const response = await fetch(
                `https://viacep.com.br/ws/${cleanCep}/json/`

        );

        const data = await response.json();

        if(data.erro) {
            setErrors(prev => ({ ...prev, cep: "CEP não oencontrado"}));

        }

        setForm(prev =>({
            ...prev,
            rua: data.logradouro || "",
            bairro: data.bairro || "",
            cidade:data.localidade || "",
            estado:data.uf || "",
        }));

        setErrors(prev => ({ ...prev,cep:""}));
    }catch {
        setErrors(prev => ({ ...prev, cep: "Erro ao buscar CEP"}));
    } finally {
        setLoadingCep(false);
    }

    };

    const validate = () => {
    let newErrors = {};

    if (!form.nome.trim()) 
        newErrors.nome = "Nome é obrigatório";

    if(!form.cargo.trim())
        newErrors.cargo = "Cargo é obrigatório";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) 
        newErrors.email = "Email inválido";

    const cleanCpf = form.cpf.replace(/\D/g, "");
    if (cleanCpf.length !== 11)
         newErrors.cpf = "CPF inválido";

    const cleanCep = form.cep.replace(/\D/g, "");
    if (cleanCep.length !== 8)
        newErrors.cep = "CEP deve conter 8 números";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        setTimeout(() => {
      console.log("Dados enviados:", form);
            
      setForm({
        nome: "",
        cargo: "",
        cpf: "",
        email: "",
        cep: "",
        rua: "",
        bairro: "",
        cidade: "",
        estado: ""
      });

      setErrors({});
      setLoading(false);
      alert("Funcionário cadastrado com sucesso!");

    }, 1500);
  };

    return (
        <form className="form" onSubmit={handleSubmit}>
           
            <div className="form-group">
                <label>Nome Completo</label>
                <input 
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite o nome completo"
                className={errors.nome ? "error" : ""} />

        {errors.nome && (<span className="error-text">{errors.nome}</span>
        )}           
         </div>

         <div className="form-group">
            <label>Cargo</label>
            <input
            name="cargo"
            value={form.cargo}
            onChange={handleChange}
            placeholder="Ex: Desenvolvedor"
            className={errors.cargo ? "error" : ""} />
            {errors.cargo && <span className="error-text">{errors.cargo}</span>}
         </div>

            <div className="form-group">
                <label>CPF</label>
                <input
               name="cpf"
               value={form.cpf}
               onChange={handleChange}
               placeholder="000.000.000-00"
               maxLength="14"
               className={errors.cpf ? "error" : ""}/>
                
                {errors.cpf && (
                <span className="error-text">{errors.cpf}</span>
               )}
            </div>

            <div className="form-group">
                <label>Email</label>
            <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="email@empresa.com"
            className={errors.email ? "error" : ""}/>
            
            {errors.email && (
          <span className="error-text">{errors.email}</span>
        )}            </div>

            
            <div className="form-group">
                <label>CEP</label>
                <input
               name="cep"
               value={form.cep}
               onChange={(e) => {
             handleChange(e);
             buscarCep(e.target.value);
            }}
             placeholder="00000-000"
             className={errors.cep ? "error" : ""}
/>          
             {loadingCep && (
           <span className="loading-text">
           Buscando endereço...
    </span>
        )}
            
           {errors.cep && (
          <span className="error-text">{errors.cep}</span>
        )}
                
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Rua</label>
                    <input 
                    name="rua"
                    value={form.rua}
                    onChange={handleChange}/>
                </div>
                
                <div className="form-group">
                    <label>Bairro</label>
                    <input 
                    name="bairro"
                    value={form.bairro}
                    onChange={handleChange} />
                </div>
                
                <div className="form-row-small">
                <div className="form-group">
                    <label>Cidade</label>
                    <input 
                    name="cidade"
                    value={form.cidade}
                    onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <label>Estado</label>
                    <input 
                    name="estado"
                    value={form.estado}
                    onChange={handleChange}/>
                </div>
            </div>
    </div>
    
    <button type="submit" className="submit-btn"disabled={loading}>
        {loading ? "Cadastrando..." : "Cadastrar Funcionário"}    </button>
    </form>
    );
}