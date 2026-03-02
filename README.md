# Cadastro de Funcionários

Aplicação desenvolvida em React e Vite para cadastro de funcionários com validações de CEP.

---

#  Funcionalidades

-  Validação de formulário
-  Validação de email
-  Validação de CPF
-  Busca automática de CEP via ViaCEP
-  Preenchimento automático de endereço
-  Feedback visual de erros
-  Loading states

---

# Tecnologias utilizadas

- React
- Vite
- CSS puro
- API ViaCEP
- Git
- Vercel

---

## Decisões Técnicas

Uso de React e Vite
-buid rápido
-configuração mínima

Validação manuais 
-optei por não utilizar bibliotecas externas , para demostrar domínio da lógica de validação e Reduzir dependências de bibliotecas

Integração com ViaCEP
-Busca apenas se houver digitos
-trata o erro (data.erro)
-Loading State durante requisição
-Os campos continuam editáveis

CSS puro
-domínio de classes de estilizações 
-Evitar dependência externas
-Manter o controle visual

---

## Estrutura 

src/
   components/
       EmployeeForm.jsx
       Layout.jsx
   styles/
       global.css
   App.jsx
   main.jsx

--- 
   
## Melhorias Futuras

-Lista de Funcionários Cadastrados
-Validação de CPF
-Dark Mode
-Melhoria na Responsividade

--- 

## Acesse o projeto online

https://cadastro-funcionarios-pi.vercel.app/

---

## Para rodar o projeto localmente

## 1 Clonar o repositório

git clone https://github.com/beatric3/cadastro-funcionarios.git

## 2 Acessar a pasta

cd cadastro-funcionarios

## 3 instalar

npm install

## 4 rodar o projeto

npm run dev

