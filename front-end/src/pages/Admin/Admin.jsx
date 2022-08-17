import AdminNavbar from '../../components/Admin-navbar/Admin-Navbar';

export default function Admin() {
  return (
    <section>
      <AdminNavbar />
      <form>

        <label htmlFor="name">
          Nome
          <input
            type="name"
            id="name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            // value={ name }
            // onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
            // value={ email }
            // onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            type="password"
            id="password"
            placeholder="************"
            data-testid="admin_manage__input-password"
            // value={ password }
            // onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>

        <label htmlFor="role">
          Tipo
          <select
            data-testid="admin_manage__select-role"
          >
            <option value="##">##</option>
          </select>
        </label>

        <button
          type="submit"
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </button>

      </form>
    </section>
  );
}
