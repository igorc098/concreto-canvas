import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Building2, LineChart, Shield, Briefcase, GraduationCap, Award } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 shadow-industrial">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl text-primary-foreground font-bebas tracking-wider">
            Igor de Castro Goncalves
          </h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("sobre")} className="text-primary-foreground hover:text-accent transition-smooth">
              Sobre
            </button>
            <button onClick={() => scrollToSection("projetos")} className="text-primary-foreground hover:text-accent transition-smooth">
              Projetos
            </button>
            <button onClick={() => scrollToSection("formacao")} className="text-primary-foreground hover:text-accent transition-smooth">
              Formação
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-primary-foreground hover:text-accent transition-smooth">
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/90" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas mb-6 tracking-wide animate-fade-in">
            Gestão, Prática e Engenharia
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light">
            Construindo Soluções em Pavimentação e Concreto
          </p>
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-2xl mx-auto">
            Igor de Castro Goncalves - Da gestão de projetos à execução da obra
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("projetos")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg px-8 py-6 shadow-industrial transition-smooth hover:scale-105"
            >
              Ver Projetos
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold text-lg px-8 py-6 transition-smooth hover:scale-105"
            >
              Baixar CV
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas mb-6 text-gradient-industrial">
              O Engenheiro que Pensa como Gestor
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Minha carreira é construída sobre uma base dupla: a visão estratégica da <strong className="text-foreground">Administração</strong> (Unip, concluída em 2023), focada em finanças, logística e ROI, e a precisão técnica da <strong className="text-foreground">Engenharia Civil</strong> (IESB, 2º semestre). Como empreendedor (MEI) há mais de 4 anos, não apenas administro, mas executo, traduzindo o planejamento em resultados de campo.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Meu objetivo futuro</strong> é especializar-me nas duas áreas mais críticas da indústria: <strong className="text-foreground">Patologia das Construções</strong> — para garantir a qualidade e durabilidade do produto (concreto/asfalto) — e <strong className="text-foreground">Segurança do Trabalho (SST)</strong>, para garantir a integridade dos projetos e das equipes. Essas especializações são o foco da minha trajetória acadêmica e profissional nos próximos anos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-industrial transition-smooth hover:scale-105 border-2 bg-card shadow-lg">
              <div className="flex justify-center mb-4">
                <LineChart className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-2xl font-bebas mb-3 tracking-wide text-foreground">Gestão de Custos</h3>
              <p className="text-muted-foreground font-medium">Visão administrativa focada em ROI, orçamentação e controle financeiro de projetos</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-industrial transition-smooth hover:scale-105 border-2 bg-card shadow-lg">
              <div className="flex justify-center mb-4">
                <Building2 className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-2xl font-bebas mb-3 tracking-wide text-foreground">Qualidade Técnica</h3>
              <p className="text-muted-foreground font-medium">Especialização em Patologia das Construções para garantir durabilidade e excelência</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-industrial transition-smooth hover:scale-105 border-2 bg-card shadow-lg">
              <div className="flex justify-center mb-4">
                <Shield className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-2xl font-bebas mb-3 tracking-wide text-foreground">Gestão de Risco</h3>
              <p className="text-muted-foreground font-medium">Foco em Segurança do Trabalho (SST) e prevenção de acidentes em obras</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas mb-4 text-gradient-industrial">
              Experiência Prática em Gestão e Execução de Obras
            </h2>
            <p className="text-xl text-muted-foreground">
              Liderança de projetos como MEI (Igor de Castro Goncalves) desde 2021
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Project Card 1 */}
            <Card className="overflow-hidden hover:shadow-industrial transition-smooth hover:scale-105 border-2 shadow-lg bg-card">
              <div className="bg-gradient-to-br from-primary to-secondary p-6">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bebas text-primary-foreground mb-2 tracking-wide text-center">
                  Gestão de Projeto
                </h3>
                <p className="text-primary-foreground/90 text-center font-medium">
                  Revitalização de Fachada
                </p>
              </div>
              <div className="p-6 bg-card">
                <p className="text-sm text-muted-foreground font-semibold mb-4">
                  Prédio Residencial 2 Pavimentos
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  Gestão completa da revitalização da fachada, atuando como ponto focal entre o cliente e a equipe de execução, gerenciando cronograma, logística de materiais (andaimes) e segurança operacional (trabalho em altura).
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Gestão de Custos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Comunicação (Stakeholder)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Gestão de Risco/Segurança (SST)</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project Card 2 */}
            <Card className="overflow-hidden hover:shadow-industrial transition-smooth hover:scale-105 border-2 shadow-lg bg-card">
              <div className="bg-gradient-to-br from-primary to-secondary p-6">
                <div className="flex justify-center mb-4">
                  <Briefcase className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bebas text-primary-foreground mb-2 tracking-wide text-center">
                  Gestão de Execução
                </h3>
                <p className="text-primary-foreground/90 text-center font-medium">
                  Obra Residencial em Alvenaria
                </p>
              </div>
              <div className="p-6 bg-card">
                <p className="text-sm text-muted-foreground font-semibold mb-4">
                  Cronograma Crítico de 100 Dias
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  Liderança e execução de obra residencial sob um cronograma crítico de 100 dias. Responsável pela coordenação de todas as frentes de serviço (fundações, alvenaria, instalações e acabamentos) e gestão de riscos operacionais (chuvas, fornecedores).
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Gerenciamento de Cronograma</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Liderança de Equipe</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Gestão de Riscos</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Project Card 3 */}
            <Card className="overflow-hidden hover:shadow-industrial transition-smooth hover:scale-105 border-2 shadow-lg bg-card">
              <div className="bg-gradient-to-br from-primary to-secondary p-6">
                <div className="flex justify-center mb-4">
                  <Award className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bebas text-primary-foreground mb-2 tracking-wide text-center">
                  Gestão de Reforma
                </h3>
                <p className="text-primary-foreground/90 text-center font-medium">
                  Diagnóstico e Impermeabilização
                </p>
              </div>
              <div className="p-6 bg-card">
                <p className="text-sm text-muted-foreground font-semibold mb-4">
                  Área de 80 m²
                </p>
                <p className="text-foreground mb-6 leading-relaxed">
                  Gestão completa de reforma complexa, iniciada pelo diagnóstico de patologias (infiltrações). O escopo incluiu reforço pontual, aplicação de sistemas de impermeabilização e renovação de acabamentos.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Orçamentação e Aquisições</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Logística (Prevenção de Perdas)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-semibold text-foreground">Controle de Qualidade (CQ)</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formacao" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas mb-4 text-gradient-industrial">
              Formação Híbrida
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 hover:shadow-industrial transition-smooth hover:scale-105 border-2 shadow-lg bg-card">
              <div className="flex justify-center mb-6">
                <GraduationCap className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-3xl font-bebas mb-3 text-center tracking-wide">
                Administração
              </h3>
              <p className="text-center text-muted-foreground mb-2">Universidade Paulista (Unip)</p>
              <p className="text-center text-sm text-accent mb-4 font-semibold">Concluído - Janeiro/2023</p>
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent">
                <p className="font-medium text-foreground">Expertise em Finanças e Gestão de Operações</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-industrial transition-smooth hover:scale-105 border-2 shadow-lg bg-card">
              <div className="flex justify-center mb-6">
                <Building2 className="w-16 h-16 text-accent" />
              </div>
              <h3 className="text-3xl font-bebas mb-3 text-center tracking-wide">
                Engenharia Civil
              </h3>
              <p className="text-center text-muted-foreground mb-2">Instituto de Educação Superior de Brasília (IESB)</p>
              <p className="text-center text-sm text-accent mb-4 font-semibold">Em andamento - 2º Semestre</p>
              <div className="bg-accent/10 p-4 rounded border-l-4 border-accent">
                <p className="font-medium text-foreground">Foco em Materiais de Construção (Concreto/Asfalto) e Infraestrutura</p>
              </div>
            </Card>
          </div>

          {/* Additional Qualifications */}
          <div className="mt-16 max-w-5xl mx-auto">
            <Card className="p-8 border-2 shadow-lg bg-card">
              <h3 className="text-3xl font-bebas mb-6 text-center tracking-wide text-foreground">Qualificações Adicionais</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="font-bold text-lg mb-3 text-foreground">Idiomas</p>
                  <p className="text-muted-foreground font-medium">Inglês (Leitura e conversação fluentes)</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg mb-3 text-foreground">Softwares</p>
                  <p className="text-muted-foreground font-medium">Microsoft Excel (Avançado)</p>
                  <p className="text-muted-foreground font-medium">SketchUp (Intermediário)</p>
                  <p className="text-muted-foreground font-medium">AutoCAD (Básico)</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg mb-3 text-foreground">Habilitação</p>
                  <p className="text-muted-foreground font-medium">CNH Categoria AB</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bebas mb-4 text-gradient-industrial">
              Pronto para Construir o Próximo Projeto?
            </h2>
            <p className="text-xl text-muted-foreground">
              Entre em contato para discutir oportunidades
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-industrial">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                  <Input id="name" placeholder="Seu nome completo" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input id="email" type="email" placeholder="seu.email@exemplo.com" className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea id="message" placeholder="Descreva seu projeto ou oportunidade..." className="w-full min-h-[150px]" />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-lg py-6 shadow-industrial transition-smooth hover:scale-105"
                >
                  Enviar Mensagem
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-smooth"
                >
                  LinkedIn
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold transition-smooth"
                >
                  Baixar CV Completo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-bebas tracking-wide">
            Igor de Castro Goncalves
          </p>
          <p className="text-sm mt-2 text-primary-foreground/70">
            Brasília, DF | (61) 99664-6092 | igorcastro098@gmail.com
          </p>
          <p className="text-sm mt-1 text-primary-foreground/70">
            MEI: 41.193.693/0001-63
          </p>
          <p className="text-xs mt-4 text-primary-foreground/50">
            © 2025 Igor de Castro Goncalves. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
