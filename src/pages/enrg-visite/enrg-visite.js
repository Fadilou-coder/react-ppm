import React,{useState} from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {fetchEmp, fetchTypeVisite, fetchFormations, fetchStage, creerVisite, fetchVisiteurByCni} from '../../api/apiService';
import {Spinner} from 'react-bootstrap';
import Swal from 'sweetalert2';


const MainWrapper=styled.div`
    padding-top:40px;
`;

export const EnrgVisite=(props)=>{


    const [values, setValues] = useState({
        cni: '',
        prenom: '',
        nom: '',
        dateDel: '',
        dateExp: '',
        lieu: '',
        type: '',
        email: '',
        comments: '',
        formation: '',
        stage: '',
    });

    const [loading]=useState(false);
    const [emp,addEmp]=useState([]);
    const [typeV, setTypeV]=useState([]);
    const [formations, setForm]=useState([]);
    const [stages, setStage]=useState([]);
    const [r, setR]=useState(false);


    React.useEffect(()=>{

        fetchEmp().then((response)=>{
            addEmp(response.data);
        }).catch((e)=>{
            console.log(e);
            localStorage.clear();
            props.history.push('/');
        })

        fetchTypeVisite().then((response)=>{
            setTypeV(response.data);
        }).catch((e)=>{
            console.log(e);
        })

        fetchStage().then((response)=>{
            setStage(response.data);
        }).catch((e)=>{
            console.log(e);
        })

        fetchFormations().then((response)=>{
            setForm(response.data);
        }).catch((e)=>{
            console.log(e);
        })


    }, [props.history]
    
    );


    const handleSubmit=(evt)=>{
        evt.preventDefault();
        let formData = new FormData();
        const data = ['cni','prenom','nom','dateDel','dateExp','lieu','type','email', 'comments','formation','stage'];
        data.forEach((d)=>{
            console.log(values[d]);
            if (values[d] !== '')
                formData.append(d,values[d]);
        })

        creerVisite(formData).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                console.log(response);
                Swal.fire(
                    'Succes!',
                    'Enregistrer avec succes.',
                    'success'
                  )
                  setValues({
                    cni: '',
                    prenom: '',
                    nom: '',
                    dateDel: '',
                    dateExp: '',
                    lieu: '',
                    type: '',
                    email: '',
                    comments: '',
                    formation: '',
                    stage: '',
                })
            }


        }).catch((err)=>{
            console.log("error",err);

        });
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
        }));

        if (e.target.name === 'cni') {
            setR(false);
            if (e.target.value.length === 13) {
                fetchVisiteurByCni(e.target.value).then((response)=>{
                    setValues(values => response.data)
                    setR(true);
                }).catch((e)=>{
                    console.log(e);
                })
            }
        }
        
    };
    

    // const logOut=()=>{

    //     localStorage.clear();
    //     props.history.push('/');

    // }

    const listVisite = () => {
        props.history.push('/list-visite');
    }

    return (
        <Container>
            <MainWrapper>
                <button className="btn btn-outline-primary" onClick={() =>listVisite()}>Liste de Visites</button>
                <h4> Enregistrer des Visites </h4>
                <br></br><br></br>

                <form id="form" className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                    <div className="form-group">
                        <label htmlFor="cni">CNI</label>
                        <input id="cni" type="text" className="form-control" name="cni" value={values.cni} onChange={handleChange} required/>
                                    
                        <div className="invalid-feedback">
                            CNI is invalid
                        </div>         
                    </div>

                    <div className="form-group">
                        <label htmlFor="prenom">Prenom</label>
                        <input id="prenom" type="text" className="form-control" name="prenom" value={values.prenom} onChange={handleChange} required readOnly = {r} />
                                    
                        <div className="invalid-feedback">
                            prenom is invalid
                        </div>         
                    </div>

                    <div className="form-group">
                        <label htmlFor="nom">Nom</label>
                        <input id="nom" type="text" className="form-control" name="nom" value={values.nom} onChange={handleChange} required readOnly = {r}/>
                                    
                        <div className="invalid-feedback">
                            nom is invalid
                        </div>         
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateDel">Date de Delivrance</label>
                        <input id="dateDel" type="date" className="form-control" name="dateDel" value={values.dateDel} onChange={handleChange} required readOnly = {r}/>
                                    
                        <div className="invalid-feedback">
                            Date de Delivrance est invalide
                        </div>         
                    </div>

                    <div className="form-group">
                        <label htmlFor="dateExp">Date d'expiration</label>
                        <input id="dateExp" type="date" className="form-control" name="dateExp" value={values.dateExp} onChange={handleChange} required readOnly = {r}/>
                                    
                        <div className="invalid-feedback">
                            Date d'expiration est invalide
                        </div>         
                    </div>

                    <div className="form-group">
                        <label htmlFor="lieu">Lieu</label>
                        <input id="lieu" type="text" className="form-control" name="lieu" value={values.lieu} onChange={handleChange} required readOnly = {r}/>
                                    
                        <div className="invalid-feedback">
                            lieu is invalid
                        </div>         
                    </div>

                    <div className="form-group">
                        <label htmlFor="type">Type de Visite</label>
                        <select id="type" className="form-control" name="type" value={values.type} onChange={handleChange} required >
                        <option value="">Choisir le type de visite</option>
                        {
                            typeV.map(el => <option value={el.libelle} key={el.libelle}> {el.libelle} </option>)
                        }
                        </select>       
                    </div>

                    {values.type === 'Formation' && <div className="form-group">
                        <label htmlFor="formation">Formation</label>
                        <select id="formation" className="form-control" name="formation" value={values.formation} onChange={handleChange} required >
                        <option value="">Choisir la formation</option>
                        {
                            formations.map(el => <option value={el.libelle} key={el.libelle}> {el.libelle} </option>)
                        }
                        </select>       
                    </div>}

                    { values.type === 'Stage' && <div className="form-group">
                        <label htmlFor="stage">Stage</label>
                        <select id="stage" className="form-control" name="stage" value={values.stage} onChange={handleChange} required >
                        <option value="">Choisir le Stage</option>
                        {
                            stages.map(el => <option value={el.libelle} key={el.libelle}> {el.libelle} </option>)
                        }
                        </select>       
                    </div>
                    }

                    {values.type === 'Rencontre' && <div className="form-group">
                        <label htmlFor="email">Employe</label>
                        <select id="email" className="form-control" name="email" value={values.email} onChange={handleChange} required >
                            <option value="">Choisir l'employe à rencontrer</option>
                        {
                            emp.map(el => <option value={el.email} key={el.email}> {el.prenom} {el.nom} </option>)
                        }
                        </select>      
                    </div>}

                    <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary">
                                        Enregistrer
                                        {loading && (
                                            <Spinner
                                            as="span"
                                            animation="border"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                          />
                                        )}
                                    </button>
                                </div>


                </form>

                {/* <Button style={{marginTop:'5px'}} onClick={() =>logOut()}>Logout</Button> */}
            </MainWrapper>
        </Container>
    )
}