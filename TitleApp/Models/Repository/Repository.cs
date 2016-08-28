using TitleApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using TitleApp.Models.DAL;

using System.Web;

namespace TitleApp.Models.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected EntityModel db;
        protected DbSet<T> dbSet;

        public Repository()
        {
            db = new EntityModel();
            dbSet = db.Set<T>();
        }
        public IEnumerable<T> GetAll()
        {
            return dbSet.ToList();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await dbSet.ToListAsync();
        }

        public T GetById(object Id)
        {
            return dbSet.Find(Id);
        }

        public async Task<T> GetByIdAsync(object Id)
        {
            return await dbSet.FindAsync(Id);
        }

        public void Insert(T obj)
        {
            dbSet.Add(obj);
        }
        public void Update(T obj)
        {
            db.Entry(obj).State = EntityState.Modified;
        }
        public void Delete(object Id)
        {
            T getObjById = dbSet.Find(Id);
            dbSet.Remove(getObjById);
        }
        public void Save()
        {
            db.SaveChanges();
        }
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (this.db != null)
                {
                    this.db.Dispose();
                    this.db = null;
                }
            }
        }


    }
}