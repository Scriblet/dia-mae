import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Leaf, PenLine } from "lucide-react";

const MensagemDiaDasMaes = () => {
  // Cores atualizadas para paleta adulta
  const [bgColor] = useState("bg-[#FFF8F0]"); // Bege claro suave
  const [primaryColor] = useState("text-[#6B2737]"); // Vinho profundo
  const [secondaryColor] = useState("text-[#C0A080]"); // Dourado envelhecido
  const [accentColor] = useState("bg-white/80 backdrop-blur-lg");
  const [textColor] = useState("text-[#2D2D2D]"); // Cinza escuro suave

  // Novas fontes para elegância
  const textStyles = {
    headingFont: '"Poppins", serif',
    bodyFont: '"Lora", serif',
    lineHeight: "1.6",
    letterSpacing: "0.02em",
    paragraphSpacing: "1.2em",
  };

  // Animações mais suaves
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const renderDivider = () => (
    <motion.div
      variants={itemVariants}
      className="w-24 h-px mx-auto my-8 bg-[#6B2737]/30"
    />
  );

  return (
    <div
      className={`${bgColor} min-h-screen flex flex-col justify-center items-center p-6 sm:p-8`}
      style={{ fontFamily: "Lora, serif" }}
    >
      <motion.div
        className="max-w-2xl w-full space-y-6 rounded-lg p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
        }}
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <PenLine className="mx-auto w-8 h-8 text-[#6B2737] mb-4" />
          <h1
            className={`${primaryColor} text-3xl sm:text-4xl font-bold mb-4`}
            style={{ fontFamily: "Poppins, serif" }}
          >
            Mãe, meu raio de sol
          </h1>
          <div className="text-[#C0A080] text-lg">Dia das Mães • 2025</div>
        </motion.div>

        {renderDivider()}

        <motion.p
          className={`text-base sm:text-lg ${textColor} text-justify indent-8`}
          variants={itemVariants}
          style={{
            lineHeight: textStyles.lineHeight,
            fontFamily: "Poppins, serif",
          }}
        >
          Nesses anos em São Paulo, cada desafio superado carrega a marca do seu
          ensinamento silencioso. A elegância com que transforma o ordinário em
          extraordinário, a paciência que acalma tempestades - essas são as
          heranças que carrego em cada decisão.
        </motion.p>

        <motion.p
          className={`text-base sm:text-lg ${textColor} text-justify indent-8`}
          variants={itemVariants}
          style={{ fontFamily: "Poppins, serif" }}
        >
          Desde que vim para São Paulo, venho agradecendo muito a Deus pela
          família que tenho e que me cuida, mas principalmente à senhora. Não
          tem um dia sequer que eu não traga a felicidade e o acolhimento que a
          senhora me ensinou a ter para a vida das pessoas e a minha.
        </motion.p>

        <motion.p
          className={`text-base sm:text-lg ${textColor} text-justify indent-8`}
          variants={itemVariants}
          style={{ fontFamily: "Poppins, serif" }}
        >
          Seja fazendo nosso trabalho caprichado, seja conversando com as
          pessoas, saiba que sempre me inspiro e lembro da sua grandiosidade em
          minha vida e é essa doçura que carrego no peito todos os dias.
        </motion.p>

        <motion.p
          className={`text-base sm:text-lg ${textColor} text-justify indent-8`}
          variants={itemVariants}
          style={{ fontFamily: "Poppins, serif" }}
        >
          Você transforma o simples em extraordinário, e é ao seu lado e com
          atitudes inspiradas em ti que aprendi o valor de um sorriso sincero.
          Obrigado por ser minha luz quando estou perdido, por usar sua
          paciência quase mágica para acalmar meu coração e por me ensinar, com
          seu jeito gentil, que o amor se constrói em cada gesto.
        </motion.p>

        {renderDivider()}

        <motion.div
          variants={itemVariants}
          className="text-center italic text-[#6B2737]/90 text-lg sm:text-xl max-w-md mx-auto"
        >
          <Leaf className="mx-auto w-6 h-6 mb-3" />
          Hoje celebro não apenas o Dia das Mães, mas cada momento em que você
          faz minha vida florescer.
        </motion.div>

        {renderDivider()}

        <motion.div className="text-center space-y-2" variants={itemVariants}>
          <h2
            className={`${primaryColor} text-2xl sm:text-3xl font-semibold`}
            style={{ fontFamily: "Poppins, serif" }}
          >
            Feliz Dia das Mães
          </h2>
          <p className={`${textColor} text-sm sm:text-base`}
            style={{ fontFamily: "Poppins, serif" }}
            >
            Que seu dia seja tão especial quanto você faz os meus.
          </p>
        </motion.div>

        {renderDivider()}

        <motion.div
          className="text-right text-[#6B2737] font-medium"
          variants={itemVariants}
        >
          <div className="flex coll items-center justify-end gap-2">
            <span
              style={{ fontFamily: "Poppins, serif" }}
              className="text-sm sm:text-base"
            >
              Com todo o amor do mundo, Lucas
            </span>
            <Heart className="w-5 h-5" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MensagemDiaDasMaes;
