import { LegalLayout, LegalSection, Placeholder } from '@/components/sections/LegalLayout';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description:
    'Termos de Uso do site O Brasil Não Aguenta Mais — Mobilização pela aprovação da PEC 32/2019.',
};

const toc = [
  { id: 'aceite', label: 'Identificação e aceite' },
  { id: 'objeto', label: 'Objeto' },
  { id: 'cadastro', label: 'Cadastro' },
  { id: 'conduta', label: 'Conduta do usuário' },
  { id: 'materiais', label: 'Materiais da campanha' },
  { id: 'propriedade', label: 'Propriedade intelectual' },
  { id: 'responsabilidade', label: 'Limitação de responsabilidade' },
  { id: 'comunicacoes', label: 'Comunicações eletrônicas' },
  { id: 'descadastro', label: 'Cancelamento e descadastro' },
  { id: 'privacidade', label: 'Privacidade' },
  { id: 'alteracoes', label: 'Alterações dos termos' },
  { id: 'foro', label: 'Lei aplicável e foro' },
  { id: 'contato', label: 'Contato' },
];

export default function TermosDeUsoPage() {
  return (
    <LegalLayout
      kicker="Termos de Uso"
      title={
        <>
          Regras de uso da <span className="text-(--color-accent)">plataforma</span>
        </>
      }
      effectiveDate="13 de maio de 2026"
      toc={toc}
    >
      <p>
        Estes Termos de Uso regulam o acesso e a utilização do site{' '}
        <strong>O Brasil Não Aguenta Mais</strong>, dedicado à mobilização pela aprovação da
        Proposta de Emenda à Constituição nº 32/2019 (PEC 32/2019), que dispõe sobre a redução da
        maioridade penal.
      </p>

      <LegalSection id="aceite" number={1} title="Identificação e aceite">
        <p>
          O site é mantido por{' '}
          <Placeholder>[CONTROLADOR — razão social ou nome completo + CNPJ/CPF]</Placeholder>, com
          sede em <strong>SHS, Quadra 6, Conjunto A, Bloco A, Salas 903 e 904 — Brasília/DF</strong>
          .
        </p>
        <p>
          Ao acessar, navegar, cadastrar-se ou interagir de qualquer forma com este site, você
          declara que leu, compreendeu e aceita integralmente estes Termos de Uso, bem como a{' '}
          <Link
            href="/politica-de-privacidade"
            className="text-(--color-accent) underline underline-offset-4"
          >
            Política de Privacidade
          </Link>
          . Caso não concorde com qualquer das disposições, abstenha-se de utilizar o site.
        </p>
      </LegalSection>

      <LegalSection id="objeto" number={2} title="Objeto">
        <p>O site tem por objeto:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Informar a opinião pública sobre o conteúdo, a tramitação e os argumentos favoráveis à
            aprovação da PEC 32/2019;
          </li>
          <li>
            Permitir o cadastro voluntário de apoiadores interessados em receber atualizações,
            materiais de divulgação (reels, stories, cards, narrações, textos) e convocações da
            campanha;
          </li>
          <li>
            Disponibilizar conteúdos editoriais sobre o tema, bem como reproduzir manchetes
            jornalísticas que contextualizem a pauta.
          </li>
        </ul>
        <p>
          O site possui caráter <strong>cívico e informativo</strong>, não comercial, e não realiza
          venda de produtos ou serviços remunerados.
        </p>
      </LegalSection>

      <LegalSection id="cadastro" number={3} title="Cadastro">
        <p>Para se cadastrar no site, o usuário deve cumprir os seguintes requisitos:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Ter, no mínimo, 18 (dezoito) anos completos;</li>
          <li>
            Fornecer dados verdadeiros, atuais e completos, comprometendo-se a mantê-los
            atualizados;
          </li>
          <li>Cadastrar e-mail válido sob sua titularidade;</li>
          <li>
            Manifestar, por meio do campo de aceite, o consentimento livre, informado e inequívoco
            ao tratamento dos seus dados pessoais conforme a Política de Privacidade.
          </li>
        </ul>
        <p>
          O usuário é o único responsável pela veracidade das informações prestadas. O cadastro
          realizado com dados de terceiros, sem autorização, ou com dados falsos poderá ser suspenso
          ou excluído, sem prejuízo das medidas legais cabíveis.
        </p>
      </LegalSection>

      <LegalSection id="conduta" number={4} title="Conduta do usuário">
        <p>O usuário compromete-se a não utilizar o site para:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Praticar qualquer conduta vedada por lei, especialmente em desacordo com a Constituição
            Federal, o Código Penal, o Marco Civil da Internet, a LGPD e a legislação eleitoral;
          </li>
          <li>Fornecer dados falsos, inexatos ou de terceiros sem autorização;</li>
          <li>
            Utilizar mecanismos automatizados (bots, scripts, scraping) para cadastro, envio de
            requisições ou extração de dados sem autorização prévia e expressa;
          </li>
          <li>Praticar ato ilícito, fraudulento ou de má-fé;</li>
          <li>
            Tentar acessar áreas restritas, bancos de dados ou sistemas internos sem autorização;
          </li>
          <li>Violar direitos de propriedade intelectual deste site ou de terceiros;</li>
          <li>
            Divulgar mensagens de ódio, conteúdo discriminatório, calúnia, difamação, injúria ou
            qualquer forma de discurso vedado pela legislação brasileira.
          </li>
        </ul>
        <p>
          A inobservância destas regras autoriza o controlador a suspender ou cancelar o cadastro,
          bem como adotar as medidas administrativas, cíveis e criminais cabíveis.
        </p>
      </LegalSection>

      <LegalSection id="materiais" number={5} title="Materiais da campanha">
        <p>
          Após o cadastro confirmado, o usuário poderá receber materiais de divulgação relacionados
          à mobilização pela PEC 32/2019, incluindo, sem limitação: reels, stories, cards, narrações
          e textos prontos para compartilhamento.
        </p>
        <p>
          O usuário é autorizado a compartilhar tais materiais em redes sociais e canais pessoais,
          desde que mantenha a integridade do conteúdo e atribua corretamente a fonte. É vedada
          qualquer alteração que descaracterize a mensagem original, bem como o uso comercial
          desautorizado.
        </p>
      </LegalSection>

      <LegalSection id="propriedade" number={6} title="Propriedade intelectual">
        <p>
          Todo o conteúdo deste site — incluindo textos, imagens, vídeos, áudios, marca, logotipo,
          identidade visual, código-fonte, layout e arquitetura — é protegido por direitos autorais
          e demais leis aplicáveis, sendo de titularidade do controlador ou de terceiros que tenham
          autorizado seu uso.
        </p>
        <p>
          É vedada a reprodução, distribuição, modificação, comercialização ou qualquer outra forma
          de utilização do conteúdo sem autorização prévia e expressa, ressalvado o uso pessoal, não
          comercial, no contexto da mobilização pela PEC 32/2019.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidade" number={7} title="Limitação de responsabilidade">
        <p>
          O controlador empreende esforços razoáveis para manter o site disponível, atualizado e
          livre de falhas. Entretanto, não garante:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Que o serviço esteja disponível de forma ininterrupta ou livre de erros;</li>
          <li>Que falhas técnicas, ataques ou indisponibilidade de terceiros não ocorram;</li>
          <li>
            Que o conteúdo informativo aqui veiculado seja interpretado como aconselhamento jurídico
            individualizado.
          </li>
        </ul>
        <p>
          Na máxima extensão permitida pela legislação aplicável, o controlador não responde por
          danos indiretos, lucros cessantes, perda de oportunidade ou prejuízos decorrentes de uso
          inadequado do site, de indisponibilidade temporária ou de fatores alheios à sua atuação.
        </p>
      </LegalSection>

      <LegalSection id="comunicacoes" number={8} title="Comunicações eletrônicas">
        <p>
          Ao se cadastrar, o usuário consente expressamente em receber, por e-mail, comunicações
          relacionadas à campanha, incluindo confirmações, atualizações, materiais e convocações.
        </p>
        <p>
          As comunicações são enviadas a partir de endereço do domínio{' '}
          <strong>flaviobolsonaro.news</strong>. O envio é operado pela plataforma Loops, conforme
          descrito na Política de Privacidade.
        </p>
      </LegalSection>

      <LegalSection id="descadastro" number={9} title="Cancelamento e descadastro">
        <p>
          O usuário pode cancelar seu cadastro e revogar o consentimento ao tratamento de dados a
          qualquer momento, por dois caminhos:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Clicando no botão <strong>Cancelar inscrição</strong> presente no rodapé de todos os
            e-mails enviados;
          </li>
          <li>
            Enviando mensagem para{' '}
            <a
              href="mailto:dmarc@flaviobolsonaro.news"
              className="text-(--color-accent) underline underline-offset-4"
            >
              dmarc@flaviobolsonaro.news
            </a>{' '}
            solicitando o descadastro.
          </li>
        </ul>
        <p>
          Após o descadastro, os dados pessoais serão tratados conforme descrito na seção de
          armazenamento da Política de Privacidade.
        </p>
      </LegalSection>

      <LegalSection id="privacidade" number={10} title="Privacidade">
        <p>
          O tratamento de dados pessoais é descrito de forma detalhada na{' '}
          <Link
            href="/politica-de-privacidade"
            className="text-(--color-accent) underline underline-offset-4"
          >
            Política de Privacidade
          </Link>
          , que integra estes Termos de Uso para todos os fins.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" number={11} title="Alterações dos termos">
        <p>
          Estes Termos de Uso podem ser alterados a qualquer momento. Alterações materialmente
          relevantes serão comunicadas previamente aos usuários cadastrados pelos canais disponíveis
          (e-mail e/ou aviso no site). A continuidade no uso do site após a comunicação caracteriza
          aceite tácito das novas condições.
        </p>
      </LegalSection>

      <LegalSection id="foro" number={12} title="Lei aplicável e foro">
        <p>
          Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito
          o foro da Comarca de <strong>Brasília — Distrito Federal</strong> para dirimir quaisquer
          controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro, por mais
          privilegiado que seja.
        </p>
      </LegalSection>

      <LegalSection id="contato" number={13} title="Contato">
        <p>
          Dúvidas, sugestões ou solicitações relacionadas a estes Termos de Uso podem ser
          encaminhadas para:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Atendimento geral —{' '}
            <a
              href="mailto:contato@flaviobolsonaro.news"
              className="text-(--color-accent) underline underline-offset-4"
            >
              contato@flaviobolsonaro.news
            </a>
          </li>
          <li>
            Encarregado de dados (LGPD) —{' '}
            <a
              href="mailto:dmarc@flaviobolsonaro.news"
              className="text-(--color-accent) underline underline-offset-4"
            >
              dmarc@flaviobolsonaro.news
            </a>
          </li>
        </ul>
      </LegalSection>
    </LegalLayout>
  );
}
