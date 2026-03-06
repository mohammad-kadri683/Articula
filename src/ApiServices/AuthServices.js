    import { ApiConfig } from "../Api/ApiConfig"

    export const AuthServices =  {
        MAkeRegistrishon :function(userData){
            const url= `${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.REGISTRATION}`;
            return fetch(url,{
                method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify(userData),
            }    )


            .then((res)=>{
                if(!res.ok){
                    return res.json().then((serverError)=>{
                        throw new Error(serverError.message)
                    })
                }
                return res.json()
            })
            
        
        } ,
    Login :function(loginData){
        const url =`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.LOGIN}`;
        return fetch(url,{
            method:'POST',
            headers:{

            'Content-Type':"application/json"
            },

            body:JSON.stringify(loginData)

        })
    .then((res)=>{
                if(!res.ok){
                    return res.json().then((serverError)=>{
                        throw new Error(serverError.message)
                    })
                }
                return res.json()
            })    

    },
    getCategories:function(){
        const url =`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.CATEGORY}`;
        return fetch(url)
        .then((res)=>{
                if(!res.ok){
                    return res.json().then((serverError)=>{
                        throw new Error(serverError.message)
                    })
                }
                return res.json()
            }) 
    },
    getTAGS:function(){
        const url =`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.TAGS}`;
        return fetch(url)
        .then((res)=>{
                if(!res.ok){
                    return res.json().then((serverError)=>{
                        throw new Error(serverError.message)
                    })
                }
                return res.json()
            }) 
    },
    gettestimonails:function(){
        const url =`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.TESTIMONNIALS}`;
        return fetch(url)
        .then((res)=>{
                if(!res.ok){
                    return res.json().then((serverError)=>{
                        throw new Error(serverError.message)
                    })
                }
                return res.json()
            }) 


    },
    
    getUserInfo:function(credentials,userId) {
        

    const url = `${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.USER(userId)}`;

        return fetch(url,{        
        
            headers: {
        "Content-Type": "application/json",
    'Authorization':  credentials
                
            }
        })

        

        .then((res)=>{
                if(!res.ok){
                    return res.json().then((serverError)=>{
                        throw new Error(serverError.message)
                    })
                }
                return res.json()
            }) 


    },

    UserImage:function(csrfToken, credentials, file) {
        const url = `${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.UserImage}`

        return fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": csrfToken,
                "Authorization": credentials,
                    "Content-Type": "application/octet-stream",
                "Content-Disposition": `file; filename="${file.name}"`
            },
            body: file
        })
        .then((res) => {
            if (!res.ok) {
                return res.json().then(serverError => {
                    throw new Error(serverError.message)
                })
            }
            return res.json()
        })
    },
    EditUser:function(uid,csrfToken,credentials,body){
    const url=`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.EditUser(uid)}`
    return fetch(url,{
    method:"PATCH",
    headers:{
        "Content-Type": "application/json",
        'Accept': 'application/json',
    'X-CSRF-Token':csrfToken,
    "Authorization": credentials

    },
    body: JSON.stringify(body)
        


    })


    },
    CreatBlog:function(csrfToken,credentials,data) {
        const url =`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.CBLOG}`
        return fetch(url,{
            method:'POST',
            headers:{
                "Content-Type":'application/json',
                "Authorization": credentials,
                "X-CSRF-Token" : csrfToken
            },
        body: JSON.stringify(data)
        
        })
        .then((res) => {
            if (!res.ok) {
                return res.json().then(serverError => {
                    throw new Error(serverError.message)
                })
            }
            return res.json()
        })

    },
    IMageArticle:function(csrfToken, credentials, file) {
        const url = `${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.BLOIMAGE}`

        return fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": csrfToken,
                "Authorization": credentials,
                    "Content-Type": "application/octet-stream",
                "Content-Disposition": `file; filename="${file.name}"`
            },
            body: file
        })
        .then((res) => {
            if (!res.ok) {
                return res.json().then(serverError => {
                    throw new Error(serverError.message)
                })
            }
            return res.json()
        })
    },
    IMageGAllery:function(csrfToken, credentials, file) {
        const url = `${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.IMageGAllery}`

        return fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": csrfToken,
                "Authorization": credentials,
                    "Content-Type": "application/octet-stream",
                "Content-Disposition": `file; filename="${file.name}"`
            },
            body: file
        })
        .then((res) => {
            if (!res.ok) {
                return res.json().then(serverError => {
                    throw new Error(serverError.message)
                })
            }
            return res.json()
        })
    },
    MyArticleList: function(csrfToken, credentials, limit, page = 1){
    const url = `${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.MYARTICLELIST}?items_per_page=${limit}`;
    return fetch(url, {
    method:"GET",
    headers:{
        "Authorization": credentials,
        "X-CSRF-Token": csrfToken,
        "Accept": "application/json"
    }
    }).then(res => {
    if (!res.ok) {
        return res.json().then(serverError => { throw new Error(serverError.message) })
    }
    return res.json()
    })
    },
    BlogList:function(csrfToken,credentials,limit,Search,SortO,Sortby,Page,categoryId){
        const url=`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.BLOGLIST}?items_per_page=${limit}&search=${Search}&sort_order=${SortO}&sort_by=${Sortby}&page=${Page}${categoryId ? `&category=${categoryId}`:""}`
        return fetch(url,{
            headers:{
                "Authorization": credentials,
        "X-CSRF-Token": csrfToken,
        "Accept": "application/json"
            }
        })
        .then(res => {
    if (!res.ok) {
        return res.json().then(serverError => { throw new Error(serverError.message) })
    }
    return res.json()
    })

    },
ArticleDetails:function(csrfToken,credentials,uid){
  const url = `${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.ARTICLEDETAILS(uid)}`
return fetch(url,{
    headers:{
                     "Authorization": credentials,
        "X-CSRF-Token": csrfToken,
        "Accept": "application/json"
    }
})
.then(res => {
    if (!res.ok) {
        return res.json().then(serverError => { throw new Error(serverError.message) })
    }
    return res.json()
    })
},
ArticleUpdate:function(csrfToken,credentials,uid,body){
const url=`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.ARTICLEUPDATE(uid)}`
return fetch(url,{
    method:'PATCH',
    headers:{
        "Authorization": credentials,
        "X-CSRF-Token": csrfToken,
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
        body: JSON.stringify(body)

})
.then((res)=>{
if(!res.ok){
    return res.json().then(serverError =>{throw new Error(serverError.message)})
}
return res.json()
})
},
FaqList:function(catId){
    const url=`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.FAQ(catId)}`
    return fetch(url)
    .then((res)=>{
        if(!res.ok){
            return res.json().then(serverError=>{throw new Error(serverError.message)})
        }
        return res.json()
    })
},
FaqCategory:function(){
    const url=`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.FAQ_CATEGORIES}`
    return fetch(url)
    .then((res)=>{
        if(!res.ok){
            return res.json().then(serverError=>{throw new Error(serverError.message)})
        }
        return res.json()
    })

},
DeleteArticle:function(csrfToken,credentials,id){
    const url=`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.DELETEARTIClE(id)}`
    return fetch(url,{
        method: "DELETE",
    headers:{
            "Authorization": credentials,
      "X-CSRF-Token": csrfToken,
      "Accept": "application/json"
    }
    })
        .then((res)=>{
        if(!res.ok){
            return res.text().then(text=>{throw new Error(text||"Delete faild")})
        }
        return true;
    })
},
    UploadImage:function(csrfToken, credentials, file) {
        const url = `${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.UPLOADIMAG}`

        return fetch(url, {
            method: 'POST',
            headers: {
                "X-CSRF-Token": csrfToken,
                "Authorization": credentials,
                    "Content-Type": "application/octet-stream",
                "Content-Disposition": `file; filename="${file.name}"`
            },
            body: file
        })
        .then((res) => {
            if (!res.ok) {
                return res.json().then(serverError => {
                    throw new Error(serverError.message)
                })
            }
            return res.json()
        })
    },
UsersList:function(credentials){
const url=`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.UsersList}`
return fetch(url,{
    method:"GET",
    headers:{
          "Authorization": credentials,
       "Content-Type": "application/json"
    }
})
        .then((res) => {
            if (!res.ok) {
                return res.json().then(serverError => {
                    throw new Error(serverError.message)
                })
            }
            return res.json()
        })
},
    BlogListDash:function(csrfToken,credentials){
        const url=`${ApiConfig.BASE_URL}${ApiConfig.ENDPOINTS.BLOGLIST}`
        return fetch(url,{
            headers:{
                "Authorization": credentials,
        "X-CSRF-Token": csrfToken,
        "Accept": "application/json"
            }
        })
        .then(res => {
    if (!res.ok) {
        return res.json().then(serverError => { throw new Error(serverError.message) })
    }
    return res.json()
    })

    },
    }
