import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {listVisite, sortir } from '../../api/apiService'
//import Swal from 'sweetalert2';


const MainWrapper=styled.div`
    padding-top:40px;
`;

export const ListVisite=(props)=>{

    const [visite,allVisite]=useState([])


    React.useEffect(()=>{

        listVisite().then((response)=>{
            allVisite(response.data.content);
        }).catch((e)=>{
            console.log(e);
        })


    }, []
    
    );

    

    // const logOut=()=>{

    //     localStorage.clear();
    //     props.history.push('/');

    // }

    const detail = (props) => {
        console.log(props);
    }

    const visiteTerminer = (id) => {
        sortir(id).then((response) =>{
            console.log(response);
            listVisite().then((response)=>{
                allVisite(response.data.content);
                console.log(response.data.content);
            }).catch((e)=>{
                console.log(e);
            })
        }).catch((e)=>{
            console.log(e);
        })
    }

    return (
        <Container>
            <MainWrapper>
                <h4 className="text-center"> Listes des Visites </h4>

                <table className="table border text-center" id="my-table">
          <thead className="thead-info">
            <tr>
              <th scope="col">CNI</th>
              <th scope="col">Prenom</th>
              <th scope="col">Nom</th>
              <th scope="col">Type de Visite</th>
              <th scope="col">Date Entrée</th>
              <th scope="col">Date Sortie</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
                visite.map(el => 
                    <tr key={el.id}>
                        <td> {el.visiteur.cni} </td>
                        <td> {el.visiteur.prenom} </td>
                        <td> {el.visiteur.nom} </td>
                        {/* <td> {el.typeVisite.libelle} </td> */}
                        <td> {el.dateEntree} </td>
                        <td> {el.dateSortie} </td>
                        <td>
                        <button className="btn btn-outline-success mr-1" onClick={() =>visiteTerminer(el.id)}>Sortir</button>
                        <button className="btn btn-outline-primary" onClick={() =>detail(el.id)}>Detail</button>
                        </td>
                    </tr>
                )
            }
          </tbody>
        </table>

            </MainWrapper>
        </Container>
    )
}