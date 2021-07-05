using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace _7e.Domain.Entities.Users
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        
        [StringLength(20)]
        [Required]
        public string FirstName { get; set; }
        
        [StringLength(50)]
        [Required]
        public string LastName { get; set; }
        
        [StringLength(20)]
        [Required]
        public string Username { get; set; }

        [StringLength(16)]
        [Required]
        public string Password { get; set; }

        [StringLength(50)]
        [Required]
        public string Email { get; set; }

        [StringLength(11)]
        [Required]
        public string Cpf { get; set; }

        public long Phone { get; set; }
        public long CellPhone { get; set; }
        public long WhatsApp { get; set; }
        public bool Active { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public virtual Address Address { get; set; }
    }
}
