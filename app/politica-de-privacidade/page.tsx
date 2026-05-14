import { LegalLayout, LegalSection, Placeholder } from '@/components/sections/LegalLayout';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de Privacidade do site O Brasil Não Aguenta Mais — Mobilização pela PEC 32/2019. Tratamento de dados pessoais em conformidade com a LGPD.',
};

const toc = [
  { id: 'controlador', label: 'Identificação do controlador' },
  { id: 'definicoes', label: 'Definições' },
  { id: 'dados', label: 'Dados que coletamos' },
  { id: 'finalidades', label: 'Finalidades do tratamento' },
  { id: 'base-legal', label: 'Base legal' },
  { id: 'compartilhamento', label: 'Compartilhamento com terceiros' },
  { id: 'internacional', label: 'Transferência internacional' },
  { id: 'prazo', label: 'Prazo de armazenamento' },
  { id: 'direitos', label: 'Direitos do titular' },
  { id: 'exercer', label: 'Como exercer seus direitos' },
  { id: 'seguranca', label: 'Segurança da informação' },
  { id: 'cookies', label: 'Cookies e tecnologias similares' },
  { id: 'menores', label: 'Crianças e adolescentes' },
  { id: 'alteracoes', label: 'Alterações desta política' },
  { id: 'encarregado', label: 'Encarregado de dados (DPO)' },
  { id: 'foro', label: 'Lei aplicável e foro' },
  { id: 'vigencia', label: 'Vigência' },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalLayout
      kicker="Política de Privacidade"
      title={
        <>
          Como tratamos seus <span className="text-(--color-accent)">dados</span>
        </>
      }
      effectiveDate="13 de maio de 2026"
      toc={toc}
    >
      <p>
        Esta Política de Privacidade descreve como o site <strong>O Brasil Não Aguenta Mais</strong>{' '}
        — vinculado à mobilização pela aprovação da Proposta de Emenda à Constituição nº 32/2019
        (PEC 32/2019) — coleta, utiliza, armazena, compartilha e protege os dados pessoais dos
        titulares que se cadastram ou interagem com seus serviços. O tratamento de dados pessoais
        observa, em especial, a <strong>Lei nº 13.709/2018</strong> (Lei Geral de Proteção de Dados
        Pessoais — LGPD) e a <strong>Lei nº 12.965/2014</strong> (Marco Civil da Internet).
      </p>

      <LegalSection id="controlador" number={1} title="Identificação do controlador">
        <p>
          O controlador dos dados pessoais coletados por meio deste site é{' '}
          <Placeholder>[CONTROLADOR — razão social ou nome completo + CNPJ/CPF]</Placeholder>, com
          endereço em{' '}
          <strong>SHS, Quadra 6, Conjunto A, Bloco A, Salas 903 e 904 — Brasília/DF</strong>.
        </p>
        <p>
          Para qualquer comunicação relacionada ao tratamento dos seus dados, utilize os canais
          indicados na seção <Link href="#encarregado">15</Link> desta política.
        </p>
      </LegalSection>

      <LegalSection id="definicoes" number={2} title="Definições">
        <p>Para os fins desta política, aplicam-se as seguintes definições, na forma da LGPD:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Titular:</strong> pessoa natural a quem se referem os dados pessoais tratados.
          </li>
          <li>
            <strong>Dado pessoal:</strong> informação relacionada a pessoa natural identificada ou
            identificável.
          </li>
          <li>
            <strong>Tratamento:</strong> toda operação realizada com dados pessoais, como coleta,
            produção, recepção, classificação, utilização, acesso, reprodução, transmissão,
            distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou
            controle da informação, modificação, comunicação, transferência, difusão ou extração.
          </li>
          <li>
            <strong>Controlador:</strong> pessoa natural ou jurídica a quem competem as decisões
            referentes ao tratamento de dados pessoais.
          </li>
          <li>
            <strong>Operador:</strong> pessoa natural ou jurídica que realiza o tratamento de dados
            pessoais em nome do controlador.
          </li>
          <li>
            <strong>Encarregado (DPO):</strong> pessoa indicada pelo controlador para atuar como
            canal de comunicação entre o controlador, os titulares e a Autoridade Nacional de
            Proteção de Dados (ANPD).
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="dados" number={3} title="Dados que coletamos">
        <p>
          Coletamos os seguintes dados pessoais quando você se cadastra voluntariamente em nosso
          formulário de mobilização:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Nome completo</strong> — informado por você no cadastro.
          </li>
          <li>
            <strong>E-mail</strong> — informado por você no cadastro.
          </li>
          <li>
            <strong>Telefone</strong> — opcional, informado por você no cadastro.
          </li>
          <li>
            <strong>Unidade da Federação (UF)</strong> — opcional, informada por você no cadastro.
          </li>
          <li>
            <strong>Manifestação de consentimento</strong> — registro do aceite ao tratamento de
            dados na forma desta política.
          </li>
          <li>
            <strong>Endereço IP e dados de conexão</strong> — coletados automaticamente ao submeter
            o formulário, em cumprimento ao art. 15 do Marco Civil da Internet.
          </li>
          <li>
            <strong>Identificador do navegador (user-agent)</strong> — coletado automaticamente para
            fins de segurança e prevenção a fraudes.
          </li>
          <li>
            <strong>Data e hora do cadastro</strong> — registrada automaticamente.
          </li>
        </ul>
        <p>
          Não coletamos, deste site, dados pessoais sensíveis (origem racial ou étnica, convicção
          religiosa, opinião política, filiação a sindicato, dado referente à saúde ou à vida
          sexual, dado genético ou biométrico) salvo quando expressamente informados por você de
          forma livre e específica.
        </p>
      </LegalSection>

      <LegalSection id="finalidades" number={4} title="Finalidades do tratamento">
        <p>Tratamos seus dados pessoais para as seguintes finalidades:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Envio de comunicações relacionadas à mobilização pela aprovação da PEC 32/2019,
            incluindo atualizações sobre a tramitação, materiais de divulgação (reels, stories,
            cards, narrações, textos), convocações e ações da campanha.
          </li>
          <li>Confirmação do cadastro por meio de e-mail (double opt-in).</li>
          <li>
            Segmentação geográfica das comunicações, com base na UF informada, para tornar o
            conteúdo mais relevante.
          </li>
          <li>Atendimento a solicitações encaminhadas pelos titulares.</li>
          <li>
            Cumprimento de obrigações legais, regulatórias e de cooperação com autoridades públicas,
            inclusive a guarda de registros de acesso a aplicações de internet.
          </li>
          <li>Prevenção de fraudes, abuso e uso indevido do formulário ou dos materiais.</li>
        </ul>
      </LegalSection>

      <LegalSection id="base-legal" number={5} title="Base legal">
        <p>
          O tratamento dos seus dados pessoais é realizado com fundamento nas seguintes bases legais
          previstas na LGPD:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Consentimento</strong> (art. 7º, I) — para o envio de comunicações relacionadas
            à campanha, manifestado de forma livre, informada e inequívoca ao marcar o campo de
            aceite no formulário.
          </li>
          <li>
            <strong>Cumprimento de obrigação legal ou regulatória</strong> (art. 7º, II) — para a
            guarda de registros de acesso, conforme exigido pelo Marco Civil da Internet.
          </li>
          <li>
            <strong>Legítimo interesse do controlador</strong> (art. 7º, IX) — para finalidades de
            segurança, prevenção a fraudes e melhoria contínua dos serviços, sempre observados os
            direitos e liberdades fundamentais do titular.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="compartilhamento"
        number={6}
        title="Compartilhamento com terceiros (operadores)"
      >
        <p>
          Para viabilizar a operação deste site, compartilhamos dados pessoais com prestadores de
          serviço que atuam como <strong>operadores</strong>, exclusivamente nos limites e
          finalidades indicados, mediante contrato com cláusulas de proteção de dados:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-(--color-border) text-(--color-ink)">
                <th className="py-3 pr-4 font-semibold">Operador</th>
                <th className="py-3 pr-4 font-semibold">Finalidade</th>
                <th className="py-3 font-semibold">País</th>
              </tr>
            </thead>
            <tbody className="text-(--color-muted)">
              <tr className="border-b border-(--color-border)">
                <td className="py-3 pr-4">Render Services Inc.</td>
                <td className="py-3 pr-4">Hospedagem do site e banco de dados (Postgres)</td>
                <td className="py-3">Estados Unidos</td>
              </tr>
              <tr className="border-b border-(--color-border)">
                <td className="py-3 pr-4">Loops Email, Inc.</td>
                <td className="py-3 pr-4">Gestão de audiência e envio de e-mails</td>
                <td className="py-3">Estados Unidos</td>
              </tr>
              <tr className="border-b border-(--color-border)">
                <td className="py-3 pr-4">Amazon Web Services, Inc.</td>
                <td className="py-3 pr-4">Infraestrutura subjacente de envio de e-mails (SES)</td>
                <td className="py-3">Estados Unidos</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Cloudflare, Inc.</td>
                <td className="py-3 pr-4">Gerenciamento de DNS e proteção de tráfego</td>
                <td className="py-3">Estados Unidos / global</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Esses operadores tratam seus dados sob orientação do controlador, em conformidade com a
          LGPD e com suas próprias políticas de privacidade, disponíveis em seus respectivos sites.
        </p>
        <p>
          Poderemos ainda compartilhar dados pessoais com autoridades públicas, no estrito
          cumprimento de obrigação legal, decisão judicial ou requisição administrativa formal.
        </p>
      </LegalSection>

      <LegalSection id="internacional" number={7} title="Transferência internacional">
        <p>
          Em razão da localização dos operadores indicados acima, parte do tratamento dos seus dados
          ocorre fora do território brasileiro, em servidores localizados nos Estados Unidos.
        </p>
        <p>
          A transferência internacional é realizada com fundamento no art. 33, IX, da LGPD —{' '}
          <strong>consentimento específico e em destaque do titular</strong> —, manifestado ao
          aceitar esta Política de Privacidade no momento do cadastro. Adotamos garantias
          contratuais adequadas com os operadores para assegurar nível de proteção compatível com a
          legislação brasileira.
        </p>
      </LegalSection>

      <LegalSection id="prazo" number={8} title="Prazo de armazenamento">
        <p>
          Seus dados pessoais serão mantidos pelo prazo necessário ao cumprimento das finalidades
          descritas nesta política e, em todo caso, observados os seguintes critérios:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Dados de cadastro</strong> — enquanto durar o consentimento. Em caso de
            revogação ou solicitação de exclusão, os dados serão eliminados em até 30 (trinta) dias,
            ressalvadas as hipóteses de guarda obrigatória previstas em lei.
          </li>
          <li>
            <strong>Registros de acesso à aplicação</strong> — pelo prazo mínimo de 6 (seis) meses,
            conforme o art. 15 do Marco Civil da Internet.
          </li>
          <li>
            <strong>Dados necessários ao cumprimento de obrigação legal ou regulatória</strong> —
            pelo prazo exigido pela respectiva legislação.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="direitos" number={9} title="Direitos do titular">
        <p>
          Em conformidade com o art. 18 da LGPD, você pode exercer, a qualquer momento e mediante
          requisição ao encarregado, os seguintes direitos:
        </p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Confirmação da existência de tratamento de dados;</li>
          <li>Acesso aos dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>
            Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em
            desconformidade com a LGPD;
          </li>
          <li>Portabilidade dos dados a outro fornecedor de serviço ou produto;</li>
          <li>
            Eliminação dos dados pessoais tratados com base no consentimento, exceto nas hipóteses
            previstas no art. 16 da LGPD;
          </li>
          <li>
            Informação das entidades públicas e privadas com as quais o controlador realizou uso
            compartilhado dos dados;
          </li>
          <li>
            Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências
            da negativa;
          </li>
          <li>Revogação do consentimento, a qualquer tempo, mediante manifestação expressa;</li>
          <li>
            Oposição a tratamento realizado com fundamento em uma das hipóteses de dispensa de
            consentimento, em caso de descumprimento da LGPD;
          </li>
          <li>Peticionar perante a Autoridade Nacional de Proteção de Dados (ANPD).</li>
        </ol>
      </LegalSection>

      <LegalSection id="exercer" number={10} title="Como exercer seus direitos">
        <p>
          Para exercer qualquer dos direitos previstos na seção anterior, envie solicitação para o
          encarregado de dados pelo e-mail{' '}
          <a
            href="mailto:dmarc@flaviobolsonaro.news"
            className="text-(--color-accent) underline underline-offset-4"
          >
            dmarc@flaviobolsonaro.news
          </a>
          , informando: (i) nome completo, (ii) e-mail utilizado no cadastro e (iii) descrição clara
          do pedido.
        </p>
        <p>
          Responderemos sua solicitação no prazo máximo de 15 (quinze) dias, na forma do art. 19,
          §1º, da LGPD. Poderemos solicitar informações adicionais para confirmar sua identidade e
          evitar fraudes.
        </p>
        <p>
          Você também pode descadastrar-se imediatamente de nossas comunicações por meio do link{' '}
          <strong>Cancelar inscrição</strong> presente em todos os e-mails enviados.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" number={11} title="Segurança da informação">
        <p>
          Adotamos medidas técnicas e administrativas razoáveis e proporcionais ao risco para
          proteger seus dados pessoais contra acesso não autorizado, perda, alteração, destruição ou
          qualquer forma de tratamento inadequado ou ilícito. Entre as medidas adotadas:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Criptografia TLS para todo o tráfego entre o seu navegador e nossos servidores;</li>
          <li>Banco de dados gerenciado com criptografia em repouso;</li>
          <li>Controle de acesso baseado em perfis e princípio do menor privilégio;</li>
          <li>Monitoramento de tentativas de acesso e registro de eventos relevantes;</li>
          <li>Treinamento das equipes que tratam dados pessoais.</li>
        </ul>
        <p>
          Em caso de incidente de segurança que possa acarretar risco ou dano relevante aos
          titulares, comunicaremos a ANPD e os titulares afetados, na forma do art. 48 da LGPD.
        </p>
      </LegalSection>

      <LegalSection id="cookies" number={12} title="Cookies e tecnologias similares">
        <p>
          Atualmente este site{' '}
          <strong>
            não utiliza cookies de rastreamento, identificadores publicitários ou tecnologias
            similares para fins de marketing
          </strong>
          . Utilizamos apenas os cookies estritamente necessários ao funcionamento das
          funcionalidades técnicas do site (por exemplo, manutenção de sessão), os quais não
          dependem de consentimento prévio do titular.
        </p>
        <p>
          Caso futuramente venhamos a adotar ferramentas de análise ou marketing (como Google
          Analytics ou Meta Pixel), esta política será atualizada e exibiremos banner de
          consentimento previamente à coleta.
        </p>
      </LegalSection>

      <LegalSection id="menores" number={13} title="Crianças e adolescentes">
        <p>
          Os serviços oferecidos por este site são direcionados a pessoas maiores de 18 anos. Não
          coletamos intencionalmente dados pessoais de crianças (menores de 12 anos) ou adolescentes
          sem o consentimento específico e em destaque de pelo menos um dos pais ou responsável
          legal, na forma do art. 14 da LGPD.
        </p>
        <p>
          Caso tomemos conhecimento de que coletamos dados de criança ou adolescente sem o
          consentimento adequado, eliminaremos esses dados em até 30 dias, ressalvadas as hipóteses
          legais de guarda.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" number={14} title="Alterações desta política">
        <p>
          Esta Política de Privacidade pode ser atualizada a qualquer momento. Alterações
          materialmente relevantes serão comunicadas previamente aos titulares pelos canais
          disponíveis (e-mail e/ou aviso no site). A versão vigente é sempre identificada pela data
          ao final do documento.
        </p>
      </LegalSection>

      <LegalSection id="encarregado" number={15} title="Encarregado de dados (DPO)">
        <p>
          O encarregado de tratamento de dados pessoais, designado nos termos do art. 41 da LGPD, é{' '}
          <Placeholder>[NOME COMPLETO DO ENCARREGADO]</Placeholder>, que pode ser contatado por meio
          do e-mail{' '}
          <a
            href="mailto:dmarc@flaviobolsonaro.news"
            className="text-(--color-accent) underline underline-offset-4"
          >
            dmarc@flaviobolsonaro.news
          </a>
          .
        </p>
        <p>
          Outros canais de contato:
          <br />
          Atendimento geral —{' '}
          <a
            href="mailto:contato@flaviobolsonaro.news"
            className="text-(--color-accent) underline underline-offset-4"
          >
            contato@flaviobolsonaro.news
          </a>
        </p>
      </LegalSection>

      <LegalSection id="foro" number={16} title="Lei aplicável e foro">
        <p>
          Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil. Fica
          eleito o foro da Comarca de <strong>Brasília — Distrito Federal</strong> para dirimir
          quaisquer controvérsias decorrentes deste documento, com renúncia expressa a qualquer
          outro, por mais privilegiado que seja.
        </p>
      </LegalSection>

      <LegalSection id="vigencia" number={17} title="Vigência">
        <p>
          Esta Política de Privacidade entra em vigor em <strong>13 de maio de 2026</strong> e
          permanecerá vigente até que seja substituída por nova versão.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
