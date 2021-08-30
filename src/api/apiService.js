import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

const getCni=()=>{
    return localStorage.getItem('cni');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':'https://spring-ppm.herokuapp.com/login',
        'data':authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/visites',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchEmp=(authRequest)=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/employe',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchVisiteurs=(authRequest)=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/visiteurs',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchTypeVisite=(authRequest)=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/typeVisites',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchFormations=(authRequest)=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/formations',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchStage=(authRequest)=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/stages',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchVisiteurByCni=(cni)=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/visiteurs/'+cni,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const creerVisite=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':'https://spring-ppm.herokuapp.com/visite',
        'data':authRequest,
        headers:{
            'Authorization':'Bearer '+getToken(),
            'Content-Type': 'multipart/form-data; boundary=MyBoundady'
        }
    })
}


export const listVisite=()=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/visites',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const listVisiteur=()=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/visiteurs',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const sortir=(id)=>{
    return axios({
        method:'PUT',
        url:'https://spring-ppm.herokuapp.com/visite/'+id,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const listVisitesByVisiteur=()=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/visiteur/'+getCni()+'/visites',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}


export const listUsers=()=>{
    return axios({
        method:'GET',
        url:'https://spring-ppm.herokuapp.com/appUsers/',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}