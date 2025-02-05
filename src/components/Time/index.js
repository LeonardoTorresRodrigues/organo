/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) && <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.corPrimaria} type='color' className='input-cor'/>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador 
                    corDeFundo={props.corPrimaria}
                    key={colaborador.nome} 
                    id={colaborador.id}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    aoDeletar={() => props.aoDeletar(colaborador.id)}
                />)}
            </div>
        </section>
    );
};

export default Time;
