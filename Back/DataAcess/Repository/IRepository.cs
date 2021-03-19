using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace DataAcess.Repository
{
    public interface IRepository<T>
    {
        public void Add(T entity);
        public IEnumerable<T> GetAll();
        public IEnumerable<T> GetAll(Expression<Func<T, bool>> expression);
        public T Get(int id);
        public void Remove(int id);
        public void Save();
    }
}
