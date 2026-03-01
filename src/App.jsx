import Layout from './components/Layout';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <Layout>
      <h2 style={{ marginBottom: "20px"}}>
        <EmployeeForm />
      </h2>
    </Layout>
  );
}

export default App
