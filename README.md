ALEM DE MARTE - Documentação da aplicação

Teste técnico - Sete.Digital

Vaga: Desenvolvedor Fullstack - JR

Projeto: Além de Marte

Desenvolvido por: Marlon Allan de Sena Ferreira

Hospedado por: Heroku

Endereço da API na web: https://alemdemarteapi.herokuapp.com/

Endereço da aplicação na web: https://alemdemarte.herokuapp.com/

--------------------------------

    reactJS - versão 17.0.1
    
--------------------------------

 ----ROTA LOGIN----
 
 Consumindo api "alemdemarteapi"
 
    post('/usuario')
 
        Envia "nome" via body
    
        Recebe "id" em JSON

--------------------------------

----ROTA HOME----

Consumindo api "nasa"

    get(URL_API_NASA)
        
        Recebe os dados da imagem em JSON
        
        
Consumindo api "alemdemarteapi"
    
        post(URL_API_ALEMDEMARTEAPI/imagem)
        
            Envia "id" da imagem via body
        
                Recebe o "id" da imagem salva em JSON
            
        get(URL_API_ALEMDEMARTEAPI/usuarioimagem)
        
            Envia "id" do usuario via query
            
            Envia "id" da imagem via query
            
                Recebe o "id" da ligação usuario-imagem em JSON
        
                Recebe o "id" da imagem em JSON
            
                Recebe os "likes" da imagem em JSON
                
                Recebe o id do usuario em JSON
                    
                Recebe o "nome" do usuario em JSON

                Recebe o "like" disponível do usuario em JSON
                
                
        post(URL_API_ALEMDEMARTEAPI/like)
        
            Envia "id" da imagem via body
            
            Envia "likes" da imagem via body
            
            Envia "id" do usuario via body
            
            Envia "like" do usuario via body
            
                Recebe o status "200"
                
                
        patch(URL_API_ALEMDEMARTEAPI/usuario)
        
            Envia "id" do usuário via query
            
            Envia "nome" do usuário via query
            
                Recebe resultado default sqlite em json da operação update
        
