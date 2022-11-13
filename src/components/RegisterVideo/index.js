import { createClient } from '@supabase/supabase-js';
import React from 'react';
import { StyledRegisterVideo } from './styles';

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValue);
    return {
        values,
        handleChange:
            (evento) => {
                const value = evento.target.value;
                const name = evento.target.name;
                console.log(values);
                setValues({ ...values, [name]: value });
            },
        clearForm() {
            setValues({});
        }
    };
}

const PROJECT_URL = 'https://andjdtdjcogdjxeiidjo.supabase.co';
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFuZGpkdGRqY29nZGp4ZWlpZGpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMTg5NzUsImV4cCI6MTk4Mzc5NDk3NX0.RczardjqaC7bJQLv-s7UlNxIjJsAnMLAdLXUE75Qm2c";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

// get youtube thumbnail from video url
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

// get youtube video id
function getVideoId(url) {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition == -1) {
        return videoId.substring(0, ampersandPosition);
    }
    return videoId;
}

export default function RegisterVideo() {
    const formCadastro = useForm({ initialValue: { titulo: "", url: "" } });
    const [formVisivel, setFormVisivel] = React.useState(false);
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}
            >+</button>
            {
                formVisivel ?
                    (
                        <form onSubmit={(evento) => {
                            evento.preventDefault();
                            console.log(formCadastro.values);
                            supabase.from("video").insert({
                                title: formCadastro.values.titulo,
                                url: formCadastro.values.url,
                                thumb: getThumbnail(formCadastro.values.url),
                                playlist: "jogos",
                            }).then((oqueveio) => {
                                console.log(oqueveio);
                            }).catch((err) => {
                                console.log(err);
                            });
                            setFormVisivel(false);
                            formCadastro.clearForm();

                        }}>
                            <div>
                                <div>
                                    <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>X</button>
                                    <input placeholder="Titulo do video" name="titulo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} />
                                    <input placeholder="URL" name="url" value={formCadastro.values.url} onChange={formCadastro.handleChange} />
                                    <img src={getThumbnail(formCadastro.values.url)}></img>
                                    <p>{formCadastro.values.titulo}</p>
                                </div>

                                <button type="submit">Cadastrar</button>
                            </div>

                        </form>
                    )
                    : false
            }

        </StyledRegisterVideo >
    );
}

    // [x] falta btn para add
    // [x] Modal
    // [x] precisamos controlar o state
    // -> formulario em si