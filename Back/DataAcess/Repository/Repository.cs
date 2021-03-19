using DataAcess.Data;
using DataAcess.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;

namespace DataAcess
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private AppDataContext _db;

        internal DbSet<T> dbSet;
        public Repository(AppDataContext db)
        {
            _db = db;
            dbSet = db.Set<T>();
                
        }
        public void Add(T entity)
        {
            dbSet.Add(entity);
            Save();
        }
        public T Get(Expression<Func<T,bool>> expression)
        {
            return (T)  dbSet.Where(expression);
        }
        public IEnumerable<T> GetAll()
        {
           return dbSet.AsNoTracking().ToList();
        }
        public IEnumerable<T> GetAll(Expression<Func<T, bool>> expression)
        {
            return dbSet.AsNoTracking().Where(expression).ToList();
        }
        public void Remove(int id)
        {
            throw new NotImplementedException();
        }
        public void Save()
        {
            throw new NotImplementedException();
        }
        public T Get(int id)
        {
            throw new NotImplementedException();
        }
    }
}
