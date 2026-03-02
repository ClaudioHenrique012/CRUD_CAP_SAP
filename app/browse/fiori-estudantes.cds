using sap.cap.escola as my from '../../db/estudantes';

annotate my.Estudantes with @UI : {
    SelectionFields  : [
        primeiro_nome,
        email
    ],

    LineItem  : [
        {
            $Type : 'UI.DataField',
            Value : email,
            Label : 'Email'
        },

         {
            $Type : 'UI.DataField',
            Value : primeiro_nome,
            Label : 'Primeiro Nome'
        }


    ],

    HeaderInfo  : {
        $Type : 'UI.HeaderInfoType',
        TypeName : 'Estudante',
        TypeNamePlural : 'Estudantes',
        Title: { Value : primeiro_nome},
        Description: { Value : email},
    },
};
