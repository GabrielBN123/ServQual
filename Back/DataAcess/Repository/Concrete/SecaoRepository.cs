using DataAcess.Data;
using DataAcess.Repository.Interface;
using Model.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcess.Repository.Concrete
{
    public class SecaoRepository : Repository<Secao> , ISecao
    {
        public SecaoRepository(AppDataContext db):base(db)
        {

        }
    }
}
