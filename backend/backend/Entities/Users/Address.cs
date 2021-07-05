using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _7e.Domain.Entities.Users
{
    public class Address
    {
        [Key]
        public int Id { get; set; }

        [StringLength(50)]
        public string Street { get; set; }
        public int Number { get; set; }
        public int ZipCode { get; set; }

        [StringLength(50)]
        public string District { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
