import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {listVisiteur } from '../../api/apiService'
//import Swal from 'sweetalert2';


const MainWrapper=styled.div`
    padding-top:40px;
`;

export const ListVisiteur=(props)=>{

    const [visiteur,allVisiteur]=useState([])


    React.useEffect(()=>{

        listVisiteur().then((response)=>{
            allVisiteur(response.data.content);
        }).catch((e)=>{
            console.log(e);
        })


    }, []
    
    );

    

    // const logOut=()=>{

    //     localStorage.clear();
    //     props.history.push('/');

    // }

    const detail = (cni) => {
        console.log(cni);
        localStorage.setItem('cni',cni);
        props.history.push('/list-visites-by-visiteur');
    }

    return (
        <Container>
            <MainWrapper>
                <h4 className="text-center"> Listes des Visiteurs </h4>

                <table className="table border text-center" id="my-table">
          <thead className="thead-info">
            <tr>
              <th scope="col">CNI</th>
              <th scope="col">Prenom</th>
              <th scope="col">Nom</th>
              <th scope="col">Date Délivrance</th>
              <th scope="col">Date D'expiration</th>
              <th scope="col">Lieu</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
                visiteur.map(el => 
                    <tr key={el.cni}>
                        <td> {el.cni} </td>
                        <td> {el.prenom} </td>
                        <td> {el.nom} </td>
                        <td> {el.dateDel} </td>
                        <td> {el.dateExp} </td>
                        <td> {el.lieu} </td>
                        <td>
                        <button className="btn btn-outline-primary" onClick={() =>detail(el.cni)}>Visites</button>
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