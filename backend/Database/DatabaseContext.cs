using System;
using Domain;
using Domain.Entities.Courses;
using Domain.Entities.Quizzes;
using Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;

namespace Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        DbSet<User> User { get; set; }
        DbSet<Course> Course { get; set; }
        DbSet<Module> Module { get; set; }
        DbSet<Class> Class { get; set; }
        DbSet<Quiz> Quiz { get; set; }
        DbSet<Question> Question { get; set; }
        DbSet<Response> Response { get; set; }
    }
}
