using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace _7e.Database.Courses
{
    public class Course
    {
        _7eContext context;
        public Course(_7eContext context)
        {
            this.context = context;
        }

        public async Task<int> InsertCourseAsync(_7e.Domain.Entities.Courses.Course course)
        {
            try
            {
                if (await CourseExists(course.Title)) return 0;

                await context.Course.AddAsync(course);
                return await context.SaveChangesAsync();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<bool> CourseExists(string title)
        {
            try
            {
                return await context.Course.AnyAsync(c => c.Title == title);
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
