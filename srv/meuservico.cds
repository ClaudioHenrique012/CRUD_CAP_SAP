using sap.cap.escola as my from '../db/estudantes';
using from '../app/services.cds';


service exportSRV {
     @readonly entity GetEstudantes as projection on my.Estudantes;
     @updateonly entity UpdateEstudantes as projection on my.Estudantes;
     @insertonly entity InsertEstudantes as projection on my.Estudantes;
     @deleteonly entity DeleteEstudantes as projection on my.Estudantes;
}

