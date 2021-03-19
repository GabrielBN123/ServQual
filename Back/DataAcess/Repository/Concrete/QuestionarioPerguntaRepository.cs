using DataAcess.Data;
using DataAcess.Repository.Interface;
using Model.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcess.Repository.Concrete
{
    public class QuestionarioPerguntaRepository : Repository<QuestionarioPergunta>, IQuestionarioPerguntaRepository
    {
        public QuestionarioPerguntaRepository(AppDataContext db):base(db)
        {

        }
    }
}
