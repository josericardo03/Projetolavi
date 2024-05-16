"use client";
import Image from "next/image";
import Fachada from "@/assets/images/didicas.png";
import { motion } from "framer-motion";

export default function US() {
  return (
    <motion.div
      className="flex justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="sm:w-[100rem] w-[20rem] h-[33rem]  flex justify-between items-center p-4 rounded-3xl bg-white shadow-lg max-w-5xl mx-auto   prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-blue-500 prose-a:text-primary ">
        <div className=" max-w-[52rem] sm:ml-6 md:ml-6 ml-2">
          <h2 className=" sm:text-4xl text-xl text-center font-bold font-poppins text-primary mt-6">
            Quem somos
          </h2>
          <h5 className="xl:text-lg mt-6 mb-5 lg:text-base md:text-xl sm:text-xl text-sm mr-6">
            Somos a Agência de Crédito do Empreendedor, instituição financeira
            de fomento do Estado de Mato Grosso, vinculada a Secretaria de
            Desenvolvimento Econômico do Estado (SEDEC), regulamentada e
            fiscalizada pelo Banco Central do Brasil.
            <br />
            <br />
            Atuamos há 19 anos promovendo o acesso ao crédito, estimulando a
            realização de investimentos, a criação de emprego e renda
            fortalecendo o desenvolvimento sustentável de Mato Grosso.
            <br />
            <br />
            Com prazos longos e as taxas de juros mais competitivas do mercado,
            a Desenvolve MT apoia os micro e pequenos empreendedores mato-
            grossenses por meio de linhas de crédito. Seja para começar um
            negócio ou projeto de crescimento e inovação da empresa.
            <br />
            <br />
          </h5>
        </div>
        <Image
          src={Fachada}
          alt="Imagem"
          width={709}
          height={451}
          className="h-[28rem] w-[45rem] border-solid border-8  rounded-2xl lg:w-[36rem] xl:w-[45rem] xl:object-fill hidden lg:block"
        />
      </div>
    </motion.div>
  );
}
