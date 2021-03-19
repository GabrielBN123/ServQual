using DataAcess.Data;
using DataAcess.Repository.Interface;
using Model.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcess.Repository.Concrete
{
    public class ProjetoRepository : Repository<Projeto>, IProjetoRepository
    {
        public ProjetoRepository(AppDataContext db) : base(db)
        {

        }
    }
}
