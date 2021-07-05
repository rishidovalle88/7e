using System.Collections.Generic;

namespace _7e.Domain.Entities.Courses
{
    public class CourseContext : Default
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public ICollection<File> FilePath { get; set; }
    }
}
