import { StyledRegisterVideo } from './styles';

export default function RegisterVideo() {
    // [x] falta btn para add
    // [x] Modal
    // -> precisamos controlar o state
    // -> formulario em si
    const formVisivel = false;
    return (
        <StyledRegisterVideo>
            <button className="add-video"
            >+</button>
            {
                formVisivel ?
                    (
                        <form>
                            <div>
                                <button className="close-modal">X</button>
                                <input placeholder="Titulo do video" />
                                <input placeholder="URL" />
                                <button type="submit">Cadastrar</button>
                            </div>

                        </form>
                    )
                    : null
            }

        </StyledRegisterVideo >
    );
}
