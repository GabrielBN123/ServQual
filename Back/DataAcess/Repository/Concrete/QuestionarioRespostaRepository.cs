using DataAcess.Data;
using DataAcess.Repository.Interface;
using Model.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcess.Repository.Concrete
{
    public class QuestionarioRespostaRepository : Repository<QuestionarioResposta>, IQuestionarioRespostaRepository
    {
        public QuestionarioRespostaRepository(AppDataContext db):base(db)
        {

        }
    }
}
