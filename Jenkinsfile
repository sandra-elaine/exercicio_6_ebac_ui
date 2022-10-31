pipeline {
    agent any

    stages {
        stage('Clonar o Repositório') {
            steps {
              git branch: 'main', url: 'https://github.com/sandra-elaine/exercicio_6_ebac_ui.git'   
            }
        }
        stage('Instalar Dependências') {
            steps {
              sh 'npm install'  
            }
        }
        stage('Executar Testes') {
            steps {
              sh 'NO_COLOR=1 npm run cy:run'  
            }
        }
    }
}
