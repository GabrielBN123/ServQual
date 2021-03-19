using Microsoft.EntityFrameworkCore;
using Model.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAcess.Data
{
    public class AppDataContext : DbContext
    {



        public AppDataContext(DbContextOptions options):base(options)
        {

        }


        public DbSet<QuestionarioPergunta> QuestionarioPerguntas { get; set; }
        public DbSet<QuestionarioResposta> questionarioRespostas { get; set; }
        public DbSet<Secao> Secaos { get; set; }
        public DbSet<Projeto> Projetos { get; set; }

    }
}
