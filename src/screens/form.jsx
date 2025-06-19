function Form () {
    return (
            <section id="formulario">
                <h2>Formulário de Doação</h2>
                <form>
                    <label for="nome">Nome completo:</label>
                    <input type="text" id="nome" required/>

                    <label for="email">E-mail:</label>
                    <input type="email" id="email" required/>

                    <label for="alimento">Tipo de alimento:</label>
                    <input type="text" id="alimento" required/>

                    <label for="quantidade">Quantidade:</label>
                    <input type="text" id="quantidade" required/>

                    <button type="submit">Enviar Doação</button>
                </form>
            </section>
    )
}

export default Form