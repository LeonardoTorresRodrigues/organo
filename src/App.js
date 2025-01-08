/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Rodape from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [times, setTimes] = useState([
        {
            id: uuidv4(),
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9',
        },
        {
            id: uuidv4(),
            nome: 'Frontend',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF',
        },
        {
            id: uuidv4(),
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2',
        },
        {
            id: uuidv4(),
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8',
        },
        {
            id: uuidv4(),
            nome: 'UX e Design',
            corPrimaria: '#D86EBF',
            corSecundaria: '#FAE5F5',
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            corPrimaria: '#FEBA05',
            corSecundaria: '#FFF5D9',
        },
        {
            id: uuidv4(),
            nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF',
        }
    ]);

    const [colaboradores, setColaboradores] = useState([]);

    function deletarColaborador() {
        console.log('deletando colaborador');
    }

    function mudarCorDoTime(cor, id) {
        setTimes(times.map(time => {
            if(time.id === id) {
                time.corPrimaria = cor;
            }
            return time;
        }));
    }

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    return (
        <div className="App">
            <Banner />
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
            
            {times.map(time => <Time 
                mudarCor={mudarCorDoTime}
                key={time.nome} 
                nome={time.nome} 
                corPrimaria={time.corPrimaria} 
                corSecundaria={time.corSecundaria}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                aoDeletar={deletarColaborador}
            />)}
            <Rodape />
        </div>
    );
}

export default App;
