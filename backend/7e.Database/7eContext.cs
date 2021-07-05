
using _7e.Domain.Entities.Courses;
using _7e.Domain.Entities.Quizzes;
using _7e.Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _7e.Database
{
    public class _7eContext : DbContext
    {
        public _7eContext(DbContextOptions<_7eContext> options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }
        public DbSet<Address> Address { get; set; }
        public DbSet<Course> Course { get; set; }
        public DbSet<Module> Module { get; set; }
        public DbSet<Class> Class { get; set; }
        public DbSet<Quiz> Quiz { get; set; }
        public DbSet<Question> Question { get; set; }
        public DbSet<Response> Response { get; set; }
    }
}
