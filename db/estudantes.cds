namespace sap.cap.escola;


entity Estudantes {
    key email: String(20);
    primeiro_nome: String(20);
    ultimo_nome: String(20);
    data_cadastro: Date;
}