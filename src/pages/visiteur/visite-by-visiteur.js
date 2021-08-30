import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {listVisitesByVisiteur } from '../../api/apiService'
//import Swal from 'sweetalert2';


const MainWrapper=styled.div`
    padding-top:40px;
`;

export const VisiteByVisiteur=()=>{

    const [visites,visitesByVisiteur] = useState([{
        'id': 0,
        'typeVisite': {
            'id': 0,
            'libelle': ''
        },
        'visiteur': {
            'id': 0,
            'prenom': '',
            'nom': '',
        },
        'dateEntree': '',
        'dateSortie': ''
    }])


    React.useEffect(()=>{
        listVisitesByVisiteur().then((response)=>{
            console.log(response.data.content);
            visitesByVisiteur(response.data.content);
        }).catch((e)=>{
            console.log(e);
        })


    }, []
    
    );

    

    // const logOut=()=>{

    //     localStorage.clear();
    //     props.history.push('/');

    // }

    return (
        <Container>
            <MainWrapper>
                <h4 className="text-center"> Listes des Visites de {visites[0].visiteur.prenom} {visites[0].visiteur.nom} </h4>

        <table className="table border text-center" id="my-table">
          <thead className="thead-info">
            <tr>
              <th scope="col">Type de Visite</th>
              <th scope="col">Date Entrée</th>
              <th scope="col">Date Sortie</th>
            </tr>
          </thead>
          <tbody>
            {
                visites.map(el => 
                    <tr key={el.id}>
                        <td> {el.typeVisite.libelle} </td>
                        <td> {el.dateEntree} </td>
                        <td> {el.dateSortie} </td>
                    </tr>
                )
            }
          </tbody>
        </table>

            </MainWrapper>
        </Container>
    )
}