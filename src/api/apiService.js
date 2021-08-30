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
        'url':`${process.env.hostUrl||'http://localhost:8080'}/login`,
        'data':authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/visites`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchEmp=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/employe`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchVisiteurs=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/visiteurs`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchTypeVisite=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/typeVisites`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchFormations=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/formations`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchStage=(authRequest)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/stages`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const fetchVisiteurByCni=(cni)=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/visiteurs/`+cni,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const creerVisite=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/visite`,
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
        url:`${process.env.hostUrl||'http://localhost:8080'}/visites`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const listVisiteur=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/visiteurs`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const sortir=(id)=>{
    return axios({
        method:'PUT',
        url:`${process.env.hostUrl||'http://localhost:8080'}/visite/`+id,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}

export const listVisitesByVisiteur=()=>{
    return axios({
        method:'GET',
        url:`${process.env.hostUrl||'http://localhost:8080'}/visiteur/`+getCni()+`/visites`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })  
}