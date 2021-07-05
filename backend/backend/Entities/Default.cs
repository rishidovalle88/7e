using System;
using System.ComponentModel.DataAnnotations;

namespace _7e.Domain.Entities
{
    public class Default
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public bool Active { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        public int UpdatedBy { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
