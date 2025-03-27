const fs = require('fs'); // Requiere el módulo fs para trabajar con archivos

// Lista de palabras en el formato original
const palabras = [
    {
       palabra: "Bewusstsein",
       significado: "Conciencia, conocimiento",
       frases: [
         "Das Bewusstsein für Umweltthemen wächst. (Awareness of environmental issues is growing)",
         "Sein Bewusstsein für die Probleme der Gesellschaft ist bemerkenswert. (His awareness of society's problems is remarkable)",,
         "Bewusstsein ist der erste Schritt zur Veränderung. (Awareness is the first step towards change)"
       ]
     },
     {
       palabra: "plausibel",
       significado: "Plausible",
       frases: [
         "Sein Plan klingt sehr plausibel und gut durchdacht. (His plan sounds very plausible and well thought out.)",
         "Die Erklärung, die er gegeben hat, war plausibel, aber wir müssen mehr Beweise haben. (The explanation he gave was plausible, but we need more evidence.)",
         "Es war nicht plausibel, dass sie die ganze Zeit nichts bemerkt hat. (It was not plausible that she hadn't noticed anything the whole time.)"
       ]
     },
     {
       palabra: "Schwierigkeit",
       significado: "Dificultad, problema",
       frases: [
        "Die Schwierigkeit des Tests war überraschend. (The difficulty of the exam was surprising)",
         "Wir müssen eine Lösung für dieses Problem finden, egal wie groß die Schwierigkeit ist. (We must find a solution to this problem, no matter how great the difficulty is.)",
         "Manchmal ist die Schwierigkeit eine Gelegenheit, zu lernen. (Sometimes difficulty is an opportunity to learn)"
       ]
     },
     {
       palabra: "Verantwortung",
       significado: "Responsabilidad",
       frases: [
         "Jeder hat die Verantwortung für seine Handlungen. (Everyone has responsibility for their actions)",
         "Die Verantwortung für das Projekt liegt bei mir. (La responsabilidad del proyecto recae en mí)",
         "Verantwortung zu übernehmen ist ein Zeichen von Reife. (Asumir la responsabilidad es un signo de madurez)"
       ]
     },
     {
       palabra: "Fähigkeit",
       significado: "Habilidad, capacidad",
       frases: [
         "Die Fähigkeit, im Team zu arbeiten, ist wichtig. (La habilidad para trabajar en equipo es importante)",
         "Er hat die Fähigkeit, komplexe Probleme zu lösen. (Él tiene la capacidad de resolver problemas complejos)",
         "Jeder hat verschiedene Fähigkeiten und Talente. (Cada uno tiene diferentes habilidades y talentos)"
       ]
     },
     {
       palabra: "Verfügbarkeit",
       significado: "Disponibilidad",
       frases: [
         "Die Verfügbarkeit von Ressourcen ist entscheidend für den Erfolg. (La disponibilidad de recursos es crucial para el éxito)",
         "Bitte überprüfen Sie die Verfügbarkeit der Zimmer. (Por favor, verifique la disponibilidad de las habitaciones)",
         "Die Verfügbarkeit von Informationen ist wichtig in der heutigen Welt. (La disponibilidad de información es importante en el mundo actual)"
       ]
     },
     {
       palabra: "Erschöpfung",
       significado: "Agotamiento, cansancio extremo",
       frases: [
         "Nach der langen Reise fühlte ich eine tiefe Erschöpfung. (Después del largo viaje, sentí un profundo agotamiento)",
         "Erschöpfung kann zu gesundheitlichen Problemen führen. (El agotamiento puede llevar a problemas de salud)",
         "Die ständige Erschöpfung ist ein Zeichen von Überarbeitung. (El agotamiento constante es un signo de sobrecarga de trabajo)"
       ]
     },
     {
       palabra: "Wachstum",
       significado: "Crecimiento, desarrollo",
       frases: [
         "Das Wachstum des Unternehmens war beeindruckend. (El crecimiento de la empresa fue impresionante)",
         "Wachstum erfordert Zeit und Geduld. (El crecimiento requiere tiempo y paciencia)",
         "Wir sehen ein Wachstum in den verschiedenen Sektoren. (Vemos un crecimiento en los diferentes sectores)"
       ]
     },
     {
       palabra: "Ressource",
       significado: "Recurso",
       frases: [
         "Wasser ist eine wertvolle Ressource. (El agua es un recurso valioso)",
         "Wir müssen unsere Ressourcen besser nutzen. (Debemos utilizar mejor nuestros recursos)",
         "Die Ressource Mensch ist entscheidend für den Erfolg. (El recurso humano es crucial para el éxito)"
       ]
     },
     {
       palabra: "Erinnerung",
       significado: "Recuerdo, memoria",
       frases: [
         "Die Erinnerung an meine Kindheit ist sehr stark. (El recuerdo de mi infancia es muy fuerte)",
         "Er hat eine gute Erinnerung an Gesichter. (Él tiene buena memoria para los rostros)",
         "Die Erinnerung an diesen Tag bleibt für immer. (El recuerdo de este día permanecerá para siempre)"
       ]
     },
   
     {
       palabra: "Veranlagung",
       significado: "Tendencia, predisposición",
       frases: [
         "Er hat eine künstlerische Veranlagung. (Tiene una predisposición artística)",
         "Seine Veranlagung zu Krankheiten ist genetisch bedingt. (Su tendencia a las enfermedades es genética)",
         "Ihre Veranlagung für Sprachen macht das Lernen einfacher. (Su predisposición para los idiomas facilita el aprendizaje)"
       ]
     },
     {
       palabra: "Einsicht",
       significado: "Perspicacia, comprensión",
       frases: [
         "Die Einsicht in die Situation war entscheidend. (La comprensión de la situación fue decisiva)",
         "Er zeigte große Einsicht in die Probleme des Unternehmens. (Mostró gran perspicacia sobre los problemas de la empresa)",
         "Einsicht kommt oft mit der Erfahrung. (La comprensión a menudo viene con la experiencia)"
       ]
     },
     {
       palabra: "Beweggrund",
       significado: "Motivo, razón",
       frases: [
         "Sein Beweggrund für die Entscheidung war unklar. (Su motivo para la decisión no estaba claro)",
         "Wir müssen den Beweggrund hinter diesem Verhalten verstehen. (Necesitamos entender el motivo detrás de este comportamiento)",
         "Der Beweggrund für die Aktion war die Notwendigkeit. (El motivo para la acción fue la necesidad)"
       ]
     },
     {
       palabra: "Umgebung",
       significado: "Entorno, ambiente",
       frases: [
         "Die Umgebung war sehr ruhig und friedlich. (El entorno era muy tranquilo y pacífico)",
         "Eine angenehme Umgebung fördert die Kreativität. (Un ambiente agradable fomenta la creatividad)",
         "Die Umgebung beeinflusst unsere Stimmung. (El entorno influye en nuestro estado de ánimo)"
       ]
     },
     {
       palabra: "Verhandlung",
       significado: "Negociación",
       frases: [
         "Die Verhandlung über den Vertrag dauerte Stunden. (La negociación del contrato duró horas)",
         "Gute Verhandlungstechniken sind wichtig. (Las buenas técnicas de negociación son importantes)",
         "Die Verhandlung endete mit einem Kompromiss. (La negociación terminó con un compromiso)"
       ]
     },
     {
       palabra: "Zufall",
       significado: "Coincidencia, azar",
       frases: [
         "Es war purer Zufall, dass wir uns getroffen haben. (Fue pura coincidencia que nos encontráramos)",
         "Manchmal spielt der Zufall eine große Rolle im Leben. (A veces, el azar juega un gran papel en la vida)",
         "Der Zufall führte zu vielen interessanten Begegnungen. (La coincidencia llevó a muchos encuentros interesantes)"
       ]
     },
     {
       palabra: "Unabhängigkeit",
       significado: "Independencia",
       frases: [
         "Die Unabhängigkeit des Landes wurde 1990 erklärt. (La independencia del país fue declarada en 1990)",
         "Er strebt nach finanzieller Unabhängigkeit. (Él busca la independencia financiera)",
         "Unabhängigkeit ist ein wichtiges Ziel für viele Menschen. (La independencia es un objetivo importante para muchas personas)"
       ]
     },
     {
       palabra: "Wirkung",
       significado: "Efecto, impacto",
       frases: [
         "Die Wirkung des Medikaments war sofort spürbar. (El efecto del medicamento fue inmediato)",
         "Die Wirkung der Werbung auf die Kunden ist bedeutend. (El impacto de la publicidad en los clientes es significativo)",
         "Die Wirkung der Musik auf die Stimmung ist faszinierend. (El efecto de la música en el estado de ánimo es fascinante)"
       ]
     },
     {
       palabra: "Gegenteil",
       significado: "Contrario, opuesto",
       frases: [
         "Das Gegenteil von Liebe ist nicht Hass, sondern Gleichgültigkeit. (El contrario del amor no es el odio, sino la indiferencia)",
         "In vielen Fällen ist das Gegenteil der Fall. (En muchos casos, es todo lo contrario)",
         "Er hat das Gegenteil bewiesen. (Él ha demostrado lo contrario)"
       ]
     },
     {
       palabra: "Verwunderung",
       significado: "Asombro, sorpresa",
       frases: [
         "Die Verwunderung über die Nachricht war groß. (El asombro por la noticia fue grande)",
         "Zu meiner Verwunderung war er bereits dort. (Para mi sorpresa, ya estaba allí)",
         "Die Verwunderung über seine Fähigkeiten ist verständlich. (El asombro por sus habilidades es comprensible)"
       ]
     },
     {
       palabra: "Zustimmung",
       significado: "Aprobación, consentimiento",
       frases: [
         "Ich brauche deine Zustimmung, um weiterzumachen. (Necesito tu aprobación para continuar)",
         "Die Zustimmung des Chefs war entscheidend. (La aprobación del jefe fue decisiva)",
         "Er gab mir seine Zustimmung zu dem Plan. (Me dio su consentimiento para el plan)"
       ]
     },
     {
       palabra: "Voraussetzung",
       significado: "Requisito, condición previa",
       frases: [
         "Die Voraussetzung für den Job ist ein abgeschlossenes Studium. (El requisito para el trabajo es un título universitario)",
         "Gute Sprachkenntnisse sind eine Voraussetzung für diese Position. (Un buen dominio del idioma es un requisito para este puesto)",
         "Eine Voraussetzung für den Erfolg ist harte Arbeit. (Un requisito para el éxito es el trabajo duro)"
       ]
     },
     {
       palabra: "Betreuung",
       significado: "Atención, cuidado",
       frases: [
         "Die Betreuung der Kinder ist gut organisiert. (El cuidado de los niños está bien organizado)",
         "Er braucht rund um die Uhr Betreuung. (Necesita atención las 24 horas)",
         "Die Patienten erhalten hier gute Betreuung. (Los pacientes reciben buena atención aquí)"
       ]
     },
     {
       palabra: "Hartnäckig",
       significado: "Persistente",
       frases: [
         "Sie ist hartnäckig bei der Verfolgung ihrer Ziele. (Ella es persistente en la consecución de sus metas.)",
         "Hartnäckige Menschen geben nicht so leicht auf. (Las personas persistentes no se rinden fácilmente.)",
         "Er war hartnäckig, bis er eine Antwort bekam. (Él fue persistente hasta obtener una respuesta.)"
       ]
     },
     {
       palabra: "Missverständnis",
       significado: "Malentendido",
       frases: [
         "Das war alles ein großes Missverständnis. (Todo fue un gran malentendido)",
         "Wir hatten ein kleines Missverständnis, aber es ist geklärt. (Tuvimos un pequeño malentendido, pero está resuelto)",
         "Missverständnisse können zu großen Problemen führen. (Los malentendidos pueden llevar a grandes problemas)"
       ]
     },
     {
       palabra: "Ablehnung",
       significado: "Rechazo, negación",
       frases: [
         "Seine Ablehnung des Angebots überraschte mich. (Su rechazo de la oferta me sorprendió)",
         "Ich habe seine Ablehnung nicht erwartet. (No esperaba su rechazo)",
         "Die Ablehnung des Plans war deutlich. (El rechazo del plan fue claro)"
       ]
     },
     {
       palabra: "Vermitteln",
       significado: "Medio, interceder, transmitir",
       frases: [
         "Der Lehrer vermittelt den Schülern Wissen. (El profesor transmite conocimientos a los estudiantes)",
         "Er versucht, zwischen den Parteien zu vermitteln. (Intenta mediar entre las partes)",
         "Dieses Buch vermittelt eine wichtige Botschaft. (Este libro transmite un mensaje importante)"
       ]
     },
     {
       palabra: "Eindruck",
       significado: "Impresión",
       frases: [
         "Der erste Eindruck war positiv. (La primera impresión fue positiva)",
         "Er hinterließ einen bleibenden Eindruck. (Dejó una impresión duradera)",
         "Was war dein Eindruck von dem Meeting? (¿Cuál fue tu impresión de la reunión?)"
       ]
     },
     {
       palabra: "Übereinstimmung",
       significado: "Concordancia, acuerdo",
       frases: [
         "Es herrschte Übereinstimmung zwischen den Parteien. (Hubo acuerdo entre las partes)",
         "In vielen Punkten gab es keine Übereinstimmung. (No hubo concordancia en muchos puntos)",
         "Wir sind in Übereinstimmung über den Plan. (Estamos de acuerdo con el plan)"
       ]
     },
    
     {
       palabra: "Erwartung",
       significado: "Expectativa, esperanza",
       frases: [
         "Die Erwartungen an das Projekt sind hoch. (Las expectativas sobre el proyecto son altas)",
         "Er hat meine Erwartungen übertroffen. (Superó mis expectativas)",
         "Die Erwartungen wurden leider nicht erfüllt. (Lamentablemente, las expectativas no se cumplieron)"
       ]
     },
     {
       palabra: "Verpflichtung",
       significado: "Obligación, compromiso",
       frases: [
         "Ich habe eine Verpflichtung, das zu tun. (Tengo la obligación de hacerlo)",
         "Er hat viele berufliche Verpflichtungen. (Tiene muchas obligaciones laborales)",
         "Es war seine moralische Verpflichtung zu helfen. (Era su obligación moral ayudar)"
       ]
     },
     {
       palabra: "Rücksicht",
       significado: "Consideración, respeto",
       frases: [
         "Du solltest mehr Rücksicht auf andere nehmen. (Deberías tener más consideración por los demás)",
         "Er handelt immer ohne Rücksicht auf die Konsequenzen. (Siempre actúa sin considerar las consecuencias)",
         "Rücksicht auf die Umwelt ist heutzutage wichtig. (El respeto por el medio ambiente es importante hoy en día)"
       ]
     },
     {
       palabra: "Beharren",
       significado: "Insistir, perseverar",
       frases: [
         "Er beharrt auf seiner Meinung. (Insiste en su opinión)",
         "Trotz aller Schwierigkeiten beharrte sie auf ihrem Plan. (A pesar de todas las dificultades, insistió en su plan)",
         "Sein Beharren führte schließlich zum Erfolg. (Su perseverancia finalmente condujo al éxito)"
       ]
     },
     {
       palabra: "Auseinandersetzung",
       significado: "Disputa, confrontación",
       frases: [
         "Es gab eine heftige Auseinandersetzung zwischen den beiden. (Hubo una fuerte disputa entre los dos)",
         "Die Auseinandersetzung endete friedlich. (La confrontación terminó pacíficamente)",
         "Nach der Auseinandersetzung suchten sie nach einer Lösung. (Después de la disputa, buscaron una solución)"
       ]
     },
     {
       palabra: "Entwurf",
       significado: "Borrador, proyecto",
       frases: [
         "Der Entwurf des neuen Gebäudes ist fertig. (El borrador del nuevo edificio está listo)",
         "Sie arbeiten am Entwurf des neuen Gesetzes. (Están trabajando en el borrador de la nueva ley)",
         "Der Entwurf des Berichts muss noch überarbeitet werden. (El borrador del informe aún debe revisarse)"
       ]
     },
     {
       palabra: "Widerstand",
       significado: "Resistencia, oposición",
       frases: [
         "Es gab großen Widerstand gegen die Reformen. (Hubo mucha resistencia contra las reformas)",
         "Sein Widerstand war vergeblich. (Su resistencia fue en vano)",
         "Der Widerstand der Bevölkerung wurde unterdrückt. (La resistencia de la población fue reprimida)"
       ]
     },
     {
       palabra: "Beständigkeit",
       significado: "Constancia, estabilidad",
       frases: [
         "Seine Beständigkeit in der Arbeit ist bewundernswert. (Su constancia en el trabajo es admirable)",
         "Beständigkeit ist wichtig für langfristigen Erfolg. (La constancia es importante para el éxito a largo plazo)",
         "Ihre Beständigkeit in der Forschung führte zu Durchbrüchen. (Su estabilidad en la investigación llevó a avances)"
       ]
     },
     
     {
       palabra: "Vorstellung",
       significado: "Idea, presentación",
       frases: [
         "Meine Vorstellung von der Zukunft ist positiv. (Mi idea del futuro es positiva)",
         "Die Vorstellung des neuen Produkts war ein Erfolg. (La presentación del nuevo producto fue un éxito)",
         "Hast du eine genaue Vorstellung davon, was passieren wird? (¿Tienes una idea clara de lo que sucederá?)"
       ]
     },
     {
       palabra: "Erfahrung",
       significado: "Experiencia",
       frases: [
         "Er hat viel Erfahrung in seinem Beruf. (Tiene mucha experiencia en su trabajo)",
         "Die Reise war eine wertvolle Erfahrung. (El viaje fue una experiencia valiosa)",
         "Erfahrung ist oft der beste Lehrer. (La experiencia es a menudo el mejor maestro)"
       ]
     },
     {
       palabra: "Anpassung",
       significado: "Adaptación, ajuste",
       frases: [
         "Die Anpassung an die neuen Umstände war schwierig. (La adaptación a las nuevas circunstancias fue difícil)",
         "Er zeigte eine schnelle Anpassung an die neue Umgebung. (Mostró una rápida adaptación al nuevo entorno)",
         "Manchmal erfordert das Leben ständige Anpassungen. (A veces la vida requiere ajustes constantes)"
       ]
     },
     {
       palabra: "Verständnis",
       significado: "Comprensión",
       frases: [
         "Vielen Dank für dein Verständnis. (Muchas gracias por tu comprensión)",
         "Er zeigt großes Verständnis für die Situation. (Muestra mucha comprensión por la situación)",
         "Wir müssen mehr Verständnis füreinander haben. (Debemos tener más comprensión mutua)"
       ]
     },
     {
       palabra: "Entscheidung",
       significado: "Decisión",
       frases: [
         "Es war keine leichte Entscheidung. (No fue una decisión fácil)",
         "Die Entscheidung liegt bei dir. (La decisión está en tus manos)",
         "Ich bereue meine Entscheidung nicht. (No me arrepiento de mi decisión)"
       ]
     },
     {
       palabra: "Zufriedenheit",
       significado: "Satisfacción",
       frases: [
         "Die Zufriedenheit der Kunden ist unser Ziel. (La satisfacción de los clientes es nuestro objetivo)",
         "Er fand Zufriedenheit in seinem neuen Job. (Encontró satisfacción en su nuevo trabajo)",
         "Innere Zufriedenheit ist wichtig für das Wohlbefinden. (La satisfacción interna es importante para el bienestar)"
       ]
     },
     {
       palabra: "Umständlich",
       significado: "Complicado, engorroso",
       frases: [
         "Der Prozess ist etwas umständlich. (El proceso es un poco complicado)",
         "Umständliche Abläufe kosten oft Zeit. (Los procedimientos complicados a menudo cuestan tiempo)",
         "Es war umständlich, alle Dokumente zu besorgen. (Fue complicado conseguir todos los documentos)"
       ]
     },
     {
       palabra: "Berechtigung",
       significado: "Autorización, Derecho",
       frases: [
         "Hast du die Berechtigung, dieses Dokument zu bearbeiten? (¿Tienes la autorización para editar este documento?)",
         "Ohne Berechtigung darfst du hier nicht rein. (No puedes entrar aquí sin autorización)",
         "Er hat die Berechtigung, die Entscheidung zu treffen. (Él tiene el derecho de tomar la decisión)"
       ]
     },
     {
       palabra: "Vorurteil",
       significado: "Prejuicio",
       frases: [
         "Vorurteile sind schwer zu überwinden. (Los prejuicios son difíciles de superar)",
         "Man sollte ohne Vorurteile auf andere Menschen zugehen. (Deberíamos acercarnos a las personas sin prejuicios)",
         "Es gibt viele Vorurteile gegen Fremde. (Existen muchos prejuicios contra los extranjeros)"
       ]
     },
     {
       palabra: "Bewegung",
       significado: "Movimiento",
       frases: [
         "Regelmäßige Bewegung ist wichtig für die Gesundheit. (El movimiento regular es importante para la salud)",
         "Die politische Bewegung gewann an Einfluss. (El movimiento político ganó influencia)",
         "Seine Bewegungen waren sehr elegant. (Sus movimientos eran muy elegantes)"
       ]
     },
     {
       palabra: "Aufrichtigkeit",
       significado: "Sinceridad, Honestidad",
       frases: [
         "Ich schätze seine Aufrichtigkeit sehr. (Valoro mucho su sinceridad)",
         "Aufrichtigkeit ist eine wichtige Tugend. (La sinceridad es una virtud importante)",
         "Seine Aufrichtigkeit überzeugte mich. (Su honestidad me convenció)"
       ]
     },
     {
       palabra: "Verlässlichkeit",
       significado: "Fiabilidad, Confiabilidad",
       frases: [
         "Verlässlichkeit ist eine der wichtigsten Eigenschaften. (La fiabilidad es una de las características más importantes)",
         "In unserer Freundschaft zählt Verlässlichkeit. (En nuestra amistad, la confiabilidad cuenta mucho)",
         "Ich weiß seine Verlässlichkeit zu schätzen. (Aprecio su fiabilidad)"
       ]
     },
     {
       palabra: "Bedürfnis",
       significado: "Necesidad",
       frases: [
         "Das Bedürfnis nach Ruhe ist bei mir sehr groß. (Tengo una gran necesidad de tranquilidad)",
         "Jeder Mensch hat unterschiedliche Bedürfnisse. (Cada persona tiene necesidades diferentes)",
         "Sie hat das Bedürfnis, sich auszuruhen. (Tiene la necesidad de descansar)"
       ]
     },
     {
       palabra: "Verwirrung",
       significado: "Confusión",
       frases: [
         "Die Anweisungen sorgten für Verwirrung. (Las instrucciones causaron confusión)",
         "Es herrschte große Verwirrung in der Menge. (Había gran confusión en la multitud)",
         "Seine Antwort brachte nur mehr Verwirrung. (Su respuesta solo trajo más confusión)"
       ]
     },
     {
       palabra: "Gelassenheit",
       significado: "Serenidad, tranquilidad",
       frases: [
         "Er nahm die schlechte Nachricht mit Gelassenheit. (Tomó la mala noticia con serenidad)",
         "Gelassenheit ist der Schlüssel zum Erfolg. (La serenidad es la clave del éxito)",
         "In schwierigen Situationen hilft mir meine Gelassenheit. (En situaciones difíciles, mi serenidad me ayuda)"
       ]
     },
     {
       palabra: "Bestätigung",
       significado: "Confirmación, validación",
       frases: [
         "Ich habe die Bestätigung meiner Buchung erhalten. (He recibido la confirmación de mi reserva)",
         "Die Bestätigung seiner Theorie dauerte Jahre. (La validación de su teoría tardó años)",
         "Er suchte immer nach Bestätigung von anderen. (Siempre buscaba validación de los demás)"
       ]
     },
     {
       palabra: "Einfluss",
       significado: "Influencia",
       frases: [
         "Sie hat großen Einfluss auf ihre Kollegen. (Ella tiene una gran influencia sobre sus colegas)",
         "Der Einfluss der Medien ist unbestreitbar. (La influencia de los medios es innegable)",
         "Seine Eltern hatten viel Einfluss auf seine Entscheidung. (Sus padres tuvieron mucha influencia en su decisión)"
       ]
     },
     {
       palabra: "Gegensatz",
       significado: "Contraste, contradicción",
       frases: [
         "Im Gegensatz zu dir mag ich keinen Kaffee. (En contraste contigo, no me gusta el café)",
         "Die beiden Meinungen stehen im völligen Gegensatz. (Las dos opiniones son completamente opuestas)",
         "Es gibt einen starken Gegensatz zwischen den Kulturen. (Hay un fuerte contraste entre las culturas)"
       ]
     },
     {
       palabra: "Veränderung",
       significado: "Cambio, modificación",
       frases: [
         "Veränderungen gehören zum Leben. (Los cambios son parte de la vida)",
         "Eine Veränderung im Verhalten war spürbar. (Un cambio en el comportamiento fue perceptible)",
         "Die Gesellschaft befindet sich im ständigen Wandel und Veränderung. (La sociedad está en constante cambio y transformación)"
       ]
     },
     {
       palabra: "Verschwinden",
       significado: "Desaparecer",
       frases: [
         "Das Auto verschwand um die Ecke. (El coche desapareció en la esquina)",
         "Meine Schlüssel sind plötzlich verschwunden. (Mis llaves han desaparecido de repente)",
         "Der Nebel verschwand nach dem Sonnenaufgang. (La niebla desapareció después del amanecer)"
       ]
     },
     {
       palabra: "Kritik",
       significado: "Crítica",
       frases: [
         "Seine Arbeit steht oft unter Kritik. (Su trabajo está a menudo bajo crítica)",
         "Konstruktive Kritik hilft uns, besser zu werden. (La crítica constructiva nos ayuda a mejorar)",
         "Er kann keine Kritik vertragen. (No puede soportar las críticas)"
       ]
     },
     {
       palabra: "Beteiligung",
       significado: "Participación",
       frases: [
         "Die Beteiligung am Projekt war groß. (La participación en el proyecto fue grande)",
         "Er zeigt großes Interesse an einer aktiven Beteiligung. (Muestra gran interés en una participación activa)",
         "Ihre Beteiligung an der Diskussion war sehr hilfreich. (Su participación en la discusión fue muy útil)"
       ]
     },
     {
       palabra: "Aussicht",
       significado: "Perspectiva, panorama",
       frases: [
         "Von hier aus hat man eine wunderschöne Aussicht. (Desde aquí tienes una vista maravillosa)",
         "Die Aussicht auf Erfolg motiviert mich. (La perspectiva de éxito me motiva)",
         "Die Aussicht auf Besserung ist gering. (La perspectiva de mejora es baja)"
       ]
     },
     {
       palabra: "Ermutigung",
       significado: "Ánimo, aliento",
       frases: [
         "Ich brauche etwas Ermutigung für meine Entscheidung. (Necesito un poco de ánimo para tomar mi decisión)",
         "Dank ihrer Ermutigung habe ich es versucht. (Gracias a su aliento, lo intenté)",
         "Ermutigung von Freunden hilft oft sehr. (El ánimo de los amigos a menudo ayuda mucho)"
       ]
     },
     {
       palabra: "Selbstverständlich",
       significado: "Por supuesto, evidentemente",
       frases: [
         "Es ist selbstverständlich, dass wir helfen. (Es evidente que ayudaremos)",
         "Selbstverständlich kannst du kommen. (Por supuesto que puedes venir)",
         "Es war für ihn selbstverständlich, das zu tun. (Para él era evidente hacer eso)"
       ]
     },
     {
       palabra: "Beweggrund",
       significado: "Motivo, razón",
       frases: [
         "Was war dein Beweggrund, diese Entscheidung zu treffen? (¿Cuál fue tu motivo para tomar esta decisión?)",
         "Er hatte einen guten Beweggrund für sein Verhalten. (Tenía una buena razón para su comportamiento)",
         "Die Beweggründe für seine Tat sind unklar. (Los motivos de su acción no están claros)"
       ]
     },
     {
       palabra: "Vermögen",
       significado: "Capacidad, fortuna",
       frases: [
         "Er hat ein großes Vermögen gemacht. (Hizo una gran fortuna)",
         "Sein Vermögen, Probleme zu lösen, ist beeindruckend. (Su capacidad para resolver problemas es impresionante)",
         "Das Vermögen der Familie ist enorm. (La fortuna de la familia es enorme)"
       ]
     },
     {
       palabra: "Bedeutungslos",
       significado: "Sin importancia, Insignificante",
       frases: [
         "Das Problem war letztendlich bedeutungslos. (El problema fue finalmente insignificante)",
         "Seine Worte sind für mich bedeutungslos. (Sus palabras no tienen importancia para mí)",
         "Diese Kleinigkeit ist bedeutungslos im großen Ganzen. (Este pequeño detalle es insignificante en el conjunto)"
       ]
     },
     {
       palabra: "Ehrgeizig",
       significado: "Ambicioso",
       frases: [
         "Sie ist sehr ehrgeizig und möchte viel erreichen. (Es muy ambiciosa y quiere lograr mucho)",
         "Ehrgeizige Menschen haben oft Erfolg. (Las personas ambiciosas suelen tener éxito)",
         "Sein Ziel ist extrem ehrgeizig. (Su objetivo es extremadamente ambicioso)"
       ]
     },
     {
       palabra: "Zuverlässigkeit",
       significado: "Fiabilidad, confiabilidad",
       frases: [
         "Die Zuverlässigkeit dieses Autos ist hervorragend. (La fiabilidad de este coche es excelente)",
         "In meinem Job ist Zuverlässigkeit entscheidend. (En mi trabajo, la confiabilidad es crucial)",
         "Er ist bekannt für seine Zuverlässigkeit. (Es conocido por su confiabilidad)"
       ]
     },
     {
       palabra: "Auffällig",
       significado: "Llamativo, Notable",
       frases: [
         "Ihr Kleid war sehr auffällig. (Su vestido era muy llamativo)",
         "Es ist auffällig, wie oft er das tut. (Es notable con qué frecuencia lo hace)",
         "Das Auto hat eine auffällige Farbe. (El coche tiene un color llamativo)"
       ]
     },
     {
       palabra: "Gewissenhaft",
       significado: "Concienzudo, Cuidadoso",
       frases: [
         "Er arbeitet sehr gewissenhaft. (Trabaja de manera muy concienzuda)",
         "Gewissenhafte Menschen machen weniger Fehler. (Las personas concienzudas cometen menos errores)",
         "Sie ist eine gewissenhafte Schülerin. (Es una estudiante cuidadosa)"
       ]
     },
     {
       palabra: "Vernünftig",
       significado: "Razonable, Sensato",
       frases: [
         "Seine Entscheidung war vernünftig. (Su decisión fue razonable)",
         "Es ist vernünftig, das Geld zu sparen. (Es sensato ahorrar el dinero)",
         "Wir sollten eine vernünftige Lösung finden. (Deberíamos encontrar una solución razonable)"
       ]
     },
     {
       palabra: "Verzweifelt",
       significado: "Desesperado",
       frases: [
         "Sie war verzweifelt nach der schlechten Nachricht. (Estaba desesperada tras la mala noticia)",
         "Er hat verzweifelt nach einer Lösung gesucht. (Buscaba desesperadamente una solución)",
         "In verzweifelten Zeiten muss man ruhig bleiben. (En tiempos desesperados hay que mantener la calma)"
       ]
     },
     
     {
       palabra: "Gerücht",
       significado: "Rumor, chisme",
       frases: [
         "Es gibt ein Gerücht über sie. (Hay un rumor sobre ella)",
         "Die Gerüchte verbreiteten sich schnell. (Los rumores se propagaron rápidamente)",
         "Ist das nur ein Gerücht oder stimmt es? (¿Es solo un rumor o es cierto?)"
       ]
     },
     {
       palabra: "Widerspruch",
       significado: "Contradicción",
       frases: [
         "Seine Aussagen standen im Widerspruch zueinander. (Sus declaraciones se contradecían)",
         "Es gab einen Widerspruch in der Erklärung. (Hubo una contradicción en la explicación)",
         "Der Plan war voller Widersprüche. (El plan estaba lleno de contradicciones)"
       ]
     },
     {
       palabra: "Herausragend",
       significado: "Sobresaliente, excepcional",
       frases: [
         "Sie ist eine herausragende Schülerin. (Es una estudiante sobresaliente)",
         "Das Konzert war herausragend. (El concierto fue excepcional)",
         "Seine Leistungen im Sport sind herausragend. (Sus logros en el deporte son excepcionales)"
       ]
     },
     {
       palabra: "Anerkennung",
       significado: "Reconocimiento, Aprecio",
       frases: [
         "Er hat viel Anerkennung für seine Arbeit erhalten. (Recibió mucho reconocimiento por su trabajo)",
         "Anerkennung ist wichtig für die Motivation. (El reconocimiento es importante para la motivación)",
         "Ich schätze die Anerkennung meiner Kollegen sehr. (Valoro mucho el reconocimiento de mis colegas)"
       ]
     },
     {
       palabra: "Hinterlistig",
       significado: "Engañoso, Astuto",
       frases: [
         "Er hat auf eine hinterlistige Weise gehandelt. (Actuó de manera engañosa)",
         "Die Falle war hinterlistig. (La trampa fue astuta)",
         "Ihre hinterlistige Art hat viele überrascht. (Su manera engañosa sorprendió a muchos)"
       ]
     },
     {
       palabra: "Rücksichtslos",
       significado: "Desconsiderado, Imprudente",
       frases: [
         "Sein Verhalten war sehr rücksichtslos. (Su comportamiento fue muy desconsiderado)",
         "Rücksichtsloses Fahren kann Unfälle verursachen. (Conducir imprudentemente puede causar accidentes)",
         "Er war rücksichtslos gegenüber den Gefühlen anderer. (Fue desconsiderado con los sentimientos de los demás)"
       ]
     },
     {
       palabra: "Wertschätzen",
       significado: "Apreciar, Valorar",
       frases: [
         "Ich weiß es zu wertschätzen, wenn jemand ehrlich ist. (Aprecio cuando alguien es honesto)",
         "Man sollte kleine Gesten wertschätzen. (Deberíamos valorar los pequeños gestos)",
         "Ich wertschätze unsere Freundschaft sehr. (Valoro mucho nuestra amistad)"
       ]
     },
    
     {
       palabra: "Wahrnehmung",
       significado: "Percepción",
       frases: [
         "Jeder hat eine andere Wahrnehmung der Realität. (Cada persona tiene una percepción diferente de la realidad)",
         "Die Wahrnehmung des Geräusches war sehr intensiv. (La percepción del sonido fue muy intensa)",
         "Unsere Wahrnehmung beeinflusst unser Handeln. (Nuestra percepción influye en nuestras acciones)"
       ]
     },
     {
       palabra: "Wasserdicht",
       significado: "Impermeable",
       frases: [
         "Diese Jacke ist wasserdicht. (Esta chaqueta es impermeable)",
         "Ich brauche eine wasserdichte Tasche. (Necesito una bolsa impermeable)",
         "Sind deine Schuhe wasserdicht? (¿Tus zapatos son impermeables?)"
       ]
     },
     {
       palabra: "Unverwechselbar",
       significado: "Inconfundible",
       frases: [
         "Sein Stil ist unverwechselbar. (Su estilo es inconfundible)",
         "Der Geschmack dieses Gerichts ist unverwechselbar. (El sabor de este plato es inconfundible)",
         "Ihre Stimme ist unverwechselbar. (Su voz es inconfundible)"
       ]
     },
     {
       palabra: "Fortsetzung",
       significado: "Continuación",
       frases: [
         "Die Fortsetzung des Films kommt nächstes Jahr. (La continuación de la película sale el próximo año)",
         "Ich freue mich auf die Fortsetzung der Geschichte. (Estoy emocionado por la continuación de la historia)",
         "Die Fortsetzung war besser als der erste Teil. (La continuación fue mejor que la primera parte)"
       ]
     },
     {
       palabra: "Herausforderung",
       significado: "Desafío",
       frases: [
         "Diese Aufgabe ist eine echte Herausforderung. (Esta tarea es un verdadero desafío)",
         "Ich liebe Herausforderungen im Beruf. (Me encantan los desafíos en el trabajo)",
         "Die größte Herausforderung ist, sich selbst zu überwinden. (El mayor desafío es superarse a uno mismo)"
       ]
     },
     {
       palabra: "Voraussetzung",
       significado: "Requisito, Condición previa",
       frases: [
         "Eine gute Ausbildung ist die Voraussetzung für diesen Job. (Una buena educación es el requisito para este trabajo)",
         "Was sind die Voraussetzungen für das Stipendium? (¿Cuáles son los requisitos para la beca?)",
         "Die Voraussetzung für Erfolg ist harte Arbeit. (La condición previa para el éxito es el trabajo duro)"
       ]
     },
     {
       palabra: "Verantwortung",
       significado: "Responsabilidad",
       frases: [
         "Eltern haben eine große Verantwortung. (Los padres tienen una gran responsabilidad)",
         "Ich übernehme die volle Verantwortung. (Asumo toda la responsabilidad)",
         "Mit Freiheit kommt auch Verantwortung. (La libertad también trae responsabilidad)"
       ]
     },
     {
       palabra: "Zuverlässig",
       significado: "Confiable",
       frases: [
         "Er ist ein sehr zuverlässiger Freund. (Es un amigo muy confiable)",
         "Unsere Maschine ist zuverlässig und funktioniert einwandfrei. (Nuestra máquina es confiable y funciona perfectamente)",
         "Pünktlichkeit ist ein Zeichen für Zuverlässigkeit. (La puntualidad es una señal de confiabilidad)"
       ]
     },
     {
       palabra: "Leidenschaft",
       significado: "Pasión",
       frases: [
         "Kochen ist seine Leidenschaft. (Cocinar es su pasión)",
         "Er spricht mit großer Leidenschaft über Musik. (Habla con gran pasión sobre la música)",
         "Ohne Leidenschaft gibt es keinen Erfolg. (Sin pasión, no hay éxito)"
       ]
     },
    
     {
       palabra: "Vorsichtig",
       significado: "Cauteloso, Cuidadoso",
       frases: [
         "Sei vorsichtig beim Überqueren der Straße. (Ten cuidado al cruzar la calle)",
         "Ich bin vorsichtig mit sensiblen Informationen. (Soy cuidadoso con la información sensible)",
         "Er hat das Glas vorsichtig abgestellt. (Colocó el vaso con cuidado)"
       ]
     },
     {
       palabra: "Enttäuschung",
       significado: "Decepción",
       frases: [
         "Die Niederlage war eine große Enttäuschung. (La derrota fue una gran decepción)",
         "Ich will keine Enttäuschungen erleben. (No quiero experimentar decepciones)",
         "Nach so viel Arbeit war das Ergebnis eine Enttäuschung. (Después de tanto trabajo, el resultado fue una decepción)"
       ]
     },
     {
       palabra: "Erfahrung",
       significado: "Experiencia",
       frases: [
         "Er hat viel Erfahrung in diesem Bereich. (Tiene mucha experiencia en este campo)",
         "Mit der Zeit wirst du mehr Erfahrung sammeln. (Con el tiempo adquirirás más experiencia)",
         "Die Reise war eine unvergessliche Erfahrung. (El viaje fue una experiencia inolvidable)"
       ]
     },
     {
       palabra: "Verfügbarkeit",
       significado: "Disponibilidad",
       frases: [
         "Die Verfügbarkeit des Produkts ist begrenzt. (La disponibilidad del producto es limitada)",
         "Ich habe nächste Woche mehr Verfügbarkeit. (Tendré más disponibilidad la próxima semana)",
         "Bitte überprüfen Sie die Verfügbarkeit des Zimmers. (Por favor, verifique la disponibilidad de la habitación)"
       ]
     },
     {
       palabra: "Unvorhersehbar",
       significado: "Impredecible",
       frases: [
         "Das Wetter ist hier oft unvorhersehbar. (El clima aquí es a menudo impredecible)",
         "Die Situation wurde unvorhersehbar kompliziert. (La situación se complicó de manera impredecible)",
         "Er hat eine unvorhersehbare Reaktion gezeigt. (Mostró una reacción impredecible)"
       ]
     },
     {
       palabra: "Bedeutungsvoll",
       significado: "Significativo",
       frases: [
         "Dieses Geschenk ist für mich sehr bedeutungsvoll. (Este regalo es muy significativo para mí)",
         "Der Moment war besonders bedeutungsvoll. (El momento fue particularmente significativo)",
         "Bedeutungsvolle Gesten sind oft die besten. (Los gestos significativos suelen ser los mejores)"
       ]
     },
     {
       palabra: "Veränderung",
       significado: "Cambio",
       frases: [
         "Die Veränderung war notwendig. (El cambio era necesario)",
         "Wir brauchen eine Veränderung in unserem Lebensstil. (Necesitamos un cambio en nuestro estilo de vida)",
         "Das Unternehmen steht vor großen Veränderungen. (La empresa enfrenta grandes cambios)"
       ]
     },
     {
       palabra: "Vermissen",
       significado: "Extrañar, echar de menos",
       frases: [
         "Ich vermisse meine Familie sehr. (Echo mucho de menos a mi familia)",
         "Wir werden dich vermissen, wenn du weg bist. (Te echaremos de menos cuando te vayas)",
         "Hast du deinen Hund vermisst? (¿Extrañaste a tu perro?)"
       ]
     },
     {
       palabra: "Begeistert",
       significado: "Entusiasmado",
       frases: [
         "Ich bin begeistert von der neuen Idee. (Estoy entusiasmado con la nueva idea)",
         "Sie war begeistert von ihrem Geschenk. (Ella estaba emocionada con su regalo)",
         "Das Publikum war begeistert. (El público estaba entusiasmado)"
       ]
     },
     {
       palabra: "Missverständnis",
       significado: "Malentendido",
       frases: [
         "Es war nur ein Missverständnis. (Fue solo un malentendido)",
         "Wir hatten ein kleines Missverständnis. (Tuvimos un pequeño malentendido)",
         "Missverständnisse können leicht passieren. (Los malentendidos pueden ocurrir fácilmente)"
       ]
     },
     {
       palabra: "Verhandlung",
       significado: "Negociación",
       frases: [
         "Die Verhandlungen waren erfolgreich. (Las negociaciones fueron exitosas)",
         "Er ist ein Experte in Verhandlungen. (Es un experto en negociaciones)",
         "Die Verhandlung dauerte länger als erwartet. (La negociación duró más de lo esperado)"
       ]
     },
     {
       palabra: "Umständlich",
       significado: "Complicado, engorroso",
       frases: [
         "Die Registrierung war sehr umständlich. (El registro fue muy engorroso)",
         "Es ist ein bisschen umständlich, diesen Prozess zu durchlaufen. (Es un poco complicado pasar por este proceso)",
         "Die umständliche Erklärung hat die Sache nur verwirrt. (La explicación complicada solo confundió más la situación)"
       ]
     },
     {
       palabra: "Unterschiedlich",
       significado: "Diferente, variado",
       frases: [
         "Die Meinungen sind sehr unterschiedlich. (Las opiniones son muy diferentes)",
         "Es gibt unterschiedliche Wege, das Problem zu lösen. (Hay diferentes formas de resolver el problema)",
         "Wir haben unterschiedliche Ansichten zu diesem Thema. (Tenemos diferentes puntos de vista sobre este tema)"
       ]
     },
     {
       palabra: "Vertrauen",
       significado: "Confianza",
       frases: [
         "Ich habe volles Vertrauen in dich. (Tengo plena confianza en ti)",
         "Vertrauen ist die Basis jeder Beziehung. (La confianza es la base de cualquier relación)",
         "Es ist schwer, Vertrauen wieder aufzubauen. (Es difícil reconstruir la confianza)"
       ]
     },
     {
       palabra: "Vorstellungskraft",
       significado: "Imaginación, creatividad",
       frases: [
         "Seine Vorstellungskraft kennt keine Grenzen. (Su imaginación no tiene límites)",
         "Die Vorstellungskraft ist wichtig für Künstler. (La creatividad es importante para los artistas)",
         "Wir brauchen mehr Vorstellungskraft in der Planung. (Necesitamos más imaginación en la planificación)"
       ]
     },
     {
       palabra: "Verknüpfung",
       significado: "Conexión, Enlace",
       frases: [
         "Die Verknüpfung zwischen den Daten ist wichtig. (La conexión entre los datos es importante)",
         "Es gab eine interessante Verknüpfung zwischen den beiden Themen. (Hubo una conexión interesante entre los dos temas)",
         "Die Verknüpfung von Theorie und Praxis ist entscheidend. (La vinculación de la teoría y la práctica es crucial)"
       ]
     },
     {
       palabra: "Ergebnis",
       significado: "Resultado",
       frases: [
         "Das Ergebnis der Prüfung war überraschend. (El resultado del examen fue sorprendente)",
         "Wir müssen die Ergebnisse der Umfrage analysieren. (Debemos analizar los resultados de la encuesta)",
         "Das Ergebnis zeigt, dass wir auf dem richtigen Weg sind. (El resultado muestra que estamos en el camino correcto)"
       ]
     },
     {
       palabra: "Veränderung",
       significado: "Cambio, Transformación",
       frases: [
         "Die Veränderung der Meinung war deutlich. (El cambio de opinión fue evidente)",
         "Wir müssen uns auf Veränderungen im Markt einstellen. (Debemos adaptarnos a los cambios en el mercado)",
         "Eine Veränderung kann manchmal positiv sein. (Un cambio puede ser a veces positivo)"
       ]
     },
     {
       palabra: "Ermutigung",
       significado: "Ánimo, Aliento",
       frases: [
         "Die Ermutigung seiner Freunde half ihm sehr. (El aliento de sus amigos le ayudó mucho)",
         "Es braucht viel Ermutigung, um neue Wege zu gehen. (Se necesita mucho ánimo para tomar nuevos caminos)",
         "Die Ermutigung durch den Lehrer war entscheidend für ihren Erfolg. (El apoyo del maestro fue decisivo para su éxito)"
       ]
     },
     {
       palabra: "Widerspruch",
       significado: "Contradicción, Objeción",
       frases: [
         "Es gab einen Widerspruch zwischen seinen Worten und Taten. (Hubo una contradicción entre sus palabras y acciones)",
         "Der Widerspruch in seinen Argumenten ist offensichtlich. (La contradicción en sus argumentos es evidente)",
         "Wir sollten jeden Widerspruch sorgfältig prüfen. (Debemos examinar cuidadosamente cada objeción)"
       ]
     },
     {
       palabra: "Zusammenhang",
       significado: "Contexto, Relación",
       frases: [
         "Der Zusammenhang zwischen diesen zwei Themen ist wichtig. (La relación entre estos dos temas es importante)",
         "Im Zusammenhang mit der Diskussion haben wir neue Ideen entwickelt. (En el contexto de la discusión, desarrollamos nuevas ideas)",
         "Es gibt einen klaren Zusammenhang zwischen Ernährung und Gesundheit. (Hay una clara relación entre la alimentación y la salud)"
       ]
     },
     {
       palabra: "Anerkennung",
       significado: "Reconocimiento, Aprobación",
       frases: [
         "Die Anerkennung ihrer Leistungen war sehr wichtig für sie. (El reconocimiento de sus logros fue muy importante para ella)",
         "Er erhielt die Anerkennung für seine hervorragende Arbeit. (Recibió reconocimiento por su excelente trabajo)",
         "Anerkennung motiviert viele Menschen. (El reconocimiento motiva a muchas personas)"
       ]
     },
     {
       palabra: "Erklärung",
       significado: "Declaración, Explicación",
       frases: [
         "Die Erklärung des Problems war hilfreich. (La explicación del problema fue útil)",
         "Wir warten auf eine Erklärung von der Firma. (Estamos esperando una declaración de la empresa)",
         "Ihre Erklärung klärte viele Missverständnisse. (Su explicación aclaró muchos malentendidos)"
       ]
     },
     {
       palabra: "Herausforderung",
       significado: "Desafío",
       frases: [
         "Jede Herausforderung ist eine Chance zu wachsen. (Cada desafío es una oportunidad para crecer)",
         "Die größte Herausforderung in meinem Leben war der Umzug. (El mayor desafío de mi vida fue mudarme)",
         "Er liebt es, sich Herausforderungen zu stellen. (Le encanta enfrentarse a desafíos)"
       ]
     },
     {
       palabra: "Beobachtung",
       significado: "Observación",
       frases: [
         "Die Beobachtung der Natur ist entspannend. (La observación de la naturaleza es relajante)",
         "Seine Beobachtung half uns, das Problem zu lösen. (Su observación nos ayudó a resolver el problema)",
         "Die Beobachtung von Verhaltensweisen kann lehrreich sein. (La observación de comportamientos puede ser instructiva)"
       ]
     },
     {
       palabra: "Veranlassung",
       significado: "Motivo, Causa",
       frases: [
         "Die Veranlassung für die Versammlung war die Dringlichkeit der Situation. (El motivo para la reunión fue la urgencia de la situación)",
         "Ich sehe keinen guten Grund oder Veranlassung dafür. (No veo una buena razón o motivo para ello)",
         "Die Veranlassung der Feier war ihr Geburtstag. (El motivo de la celebración fue su cumpleaños)"
       ]
     },
     {
       palabra: "Einstellung",
       significado: "Actitud, Enfoque",
       frases: [
         "Ihre Einstellung zur Arbeit ist sehr positiv. (Su actitud hacia el trabajo es muy positiva)",
         "Eine offene Einstellung kann neue Möglichkeiten schaffen. (Una actitud abierta puede crear nuevas oportunidades)",
         "Die Einstellung des Teams muss sich ändern. (La actitud del equipo debe cambiar)"
       ]
     },
     {
       palabra: "Anpassungsfähigkeit",
       significado: "Capacidad de adaptación",
       frases: [
         "Die Anpassungsfähigkeit ist eine wichtige Fähigkeit im Berufsleben. (La capacidad de adaptación es una habilidad importante en la vida profesional)",
         "Seine Anpassungsfähigkeit an neue Situationen beeindruckt mich. (Su capacidad de adaptación a nuevas situaciones me impresiona)",
         "In der heutigen Welt ist Anpassungsfähigkeit entscheidend. (En el mundo actual, la capacidad de adaptación es crucial)"
       ]
     },
     {
       palabra: "Beitrag",
       significado: "Contribución",
       frases: [
         "Ihr Beitrag zum Projekt war entscheidend. (Su contribución al proyecto fue decisiva)",
         "Jeder hat einen Beitrag zu leisten. (Cada uno debe hacer una contribución)",
         "Der Beitrag der Wissenschaftler war bemerkenswert. (La contribución de los científicos fue notable)"
       ]
     },
     /////////// Aqui comienzan los verbos/////////////////
     /////////// Aqui comienzan los verbos/////////////////
     /////////// Aqui comienzan los verbos/////////////////
     /////////// Aqui comienzan los verbos/////////////////
     /////////// Aqui comienzan los verbos/////////////////
     /////////// Aqui comienzan los verbos/////////////////
     {
       palabra: "Zulassen",
       significado: "Permitir, autorizar",
       frases: [
         "Die Regeln lassen das nicht zu. (Las reglas no permiten eso)",
         "Ich werde nicht zulassen, dass das passiert. (No permitiré que eso suceda)",
         "Die Behörde hat das neue Projekt zugelassen. (La autoridad autorizó el nuevo proyecto)"
       ]
     },
     {
       palabra: "Erleichtern",
       significado: "Facilitar, Aligerar",
       frases: [
         "Die neuen Systeme erleichtern die Arbeit. (Los nuevos sistemas facilitan el trabajo)",
         "Eine gute Planung erleichtert den Prozess. (Una buena planificación facilita el proceso)",
         "Er hat sich erleichtert, als er die Nachricht hörte. (Se sintió aliviado al escuchar la noticia)"
       ]
     },
     {
       palabra: "Missbrauchen",
       significado: "Abusar, Maltratar",
       frases: [
         "Er hat seine Macht missbraucht. (Abusó de su poder)",
         "Missbrauch von Vertrauen ist unverzeihlich. (El abuso de la confianza es imperdonable)",
         "Das Gesetz wurde in diesem Fall missbraucht. (La ley fue mal utilizada en este caso)"
       ]
     },
     {
       palabra: "Vermeiden",
       significado: "Evitar",
       frases: [
         "Wir sollten unnötige Risiken vermeiden. (Deberíamos evitar riesgos innecesarios)",
         "Er versucht Konflikte zu vermeiden. (Intenta evitar conflictos)",
         "Vermeide es, zu spät zu kommen. (Evita llegar tarde)"
       ]
     },
     {
       palabra: "Überschätzen",
       significado: "Sobreestimar",
       frases: [
         "Er überschätzt oft seine Fähigkeiten. (A menudo sobreestima sus habilidades)",
         "Die Bedeutung des Ereignisses wurde überschätzt. (La importancia del evento fue sobreestimada)",
         "Du solltest das Risiko nicht überschätzen. (No deberías sobreestimar el riesgo)"
       ]
     },
     {
       palabra: "Beschreiben",
       significado: "Describir",
       frases: [
         "Kannst du den Mann beschreiben? (¿Puedes describir al hombre?)",
         "Sie beschreibt die Situation sehr genau. (Ella describe la situación con mucho detalle.)",
         "Ich werde das Bild für dich beschreiben. (Voy a describir la imagen para ti.)"
       ]
     },
     {
       palabra: "Entstehen",
       significado: "Surgir, Originarse",
       frases: [
         "Ein neues Problem ist entstanden. (Ha surgido un nuevo problema.)",
         "Wie ist die Idee entstanden? (¿Cómo surgió la idea?)",
         "Die Stadt entstand vor über 500 Jahren. (La ciudad se originó hace más de 500 años.)"
       ]
     },
     {
       palabra: "Entscheiden",
       significado: "Decidir",
       frases: [
         "Hast du schon entschieden, was du machen wirst? (¿Ya decidiste qué vas a hacer?)",
         "Wir müssen uns bald entscheiden. (Tenemos que decidir pronto.)",
         "Er entscheidet, das Angebot anzunehmen. (Él decide aceptar la oferta.)"
       ]
     },
     {
       palabra: "Erkennen",
       significado: "Reconocer, Darse cuenta",
       frases: [
         "Ich habe ihn sofort erkannt. (Lo reconocí de inmediato.)",
         "Sie erkennt ihren Fehler. (Ella reconoce su error.)",
         "Er konnte das Problem nicht erkennen. (Él no pudo darse cuenta del problema.)"
       ]
     },
     {
       palabra: "Erklären",
       significado: "Explicar",
       frases: [
         "Kannst du mir das bitte erklären? (¿Puedes explicarme eso, por favor?)",
         "Der Lehrer erklärt die Aufgabe. (El profesor explica la tarea.)",
         "Er hat alles sehr gut erklärt. (Él explicó todo muy bien.)"
       ]
     },
     {
       palabra: "Erwarten",
       significado: "Esperar (algo de alguien o algo)",
       frases: [
         "Ich erwarte gute Ergebnisse. (Espero buenos resultados.)",
         "Erwartest du Gäste? (¿Estás esperando invitados?)",
         "Wir erwarten, dass das Problem bald gelöst wird. (Esperamos que el problema se resuelva pronto.)"
       ]
     },
     {
       palabra: "Genießen",
       significado: "Disfrutar",
       frases: [
         "Ich genieße das gute Wetter. (Disfruto del buen clima.)",
         "Hast du den Urlaub genossen? (¿Disfrutaste de las vacaciones?)",
         "Sie genießt ihr Leben in vollen Zügen. (Ella disfruta su vida al máximo.)"
       ]
     },
     {
       palabra: "Hoffen",
       significado: "Esperar, Tener esperanza",
       frases: [
         "Ich hoffe, dass alles gut wird. (Espero que todo salga bien.)",
         "Wir hoffen auf besseres Wetter. (Esperamos tener mejor clima.)",
         "Hoffst du, den Job zu bekommen? (¿Tienes la esperanza de conseguir el trabajo?)"
       ]
     },
     {
       palabra: "Klingen",
       significado: "Sonar",
       frases: [
         "Das klingt nach einer guten Idee. (Eso suena a una buena idea.)",
         "Ihr Lachen klingt fröhlich. (Su risa suena alegre.)",
         "Die Glocke hat um 8 Uhr geklungen. (La campana sonó a las 8 en punto.)"
       ]
     },
     {
       palabra: "Leiden",
       significado: "Sufrir, Padecer",
       frases: [
         "Er leidet an einer Erkältung. (Él sufre de un resfriado.)",
         "Sie leidet unter Stress bei der Arbeit. (Ella padece de estrés en el trabajo.)",
         "Viele Menschen leiden unter Armut. (Muchas personas sufren de pobreza.)"
       ]
     },
     {
       palabra: "Missverstehen",
       significado: "Malinterpretar",
       frases: [
         "Ich glaube, du hast mich missverstanden. (Creo que me malinterpretaste.)",
         "Es ist leicht, diese Regel zu missverstehen. (Es fácil malinterpretar esta regla.)",
         "Wir haben uns leider missverstanden. (Desafortunadamente, nos malentendimos.)"
       ]
     },
     {
       palabra: "Sich bemühen",
       significado: "Esforzarse",
       frases: [
         "Ich bemühe mich, Deutsch zu lernen. (Me esfuerzo por aprender alemán.)",
         "Er bemüht sich, pünktlich zu sein. (Él se esfuerza por ser puntual.)",
         "Wir bemühen uns, das Problem zu lösen. (Nos estamos esforzando por resolver el problema.)"
       ]
     },
     {
       palabra: "Sich erinnern",
       significado: "Recordar",
       frases: [
         "Ich erinnere mich an meinen ersten Schultag. (Recuerdo mi primer día de escuela.)",
         "Kannst du dich an sie erinnern? (¿Puedes recordarla?)",
         "Er erinnert sich an das Versprechen. (Él recuerda la promesa.)"
       ]
     },
     {
       palabra: "Sich irren",
       significado: "Equivocarse",
       frases: [
         "Ich habe mich geirrt, das war die falsche Tür. (Me equivoqué, era la puerta equivocada.)",
         "Wenn du denkst, dass er lügt, irrst du dich. (Si crees que él está mintiendo, te equivocas.)",
         "Er irrt sich selten in solchen Dingen. (Él rara vez se equivoca en estas cosas.)"
       ]
     },
     {
       palabra: "Unterscheiden",
       significado: "Distinguir",
       frases: [
         "Kannst du die beiden Bilder unterscheiden? (¿Puedes distinguir las dos imágenes?)",
         "Er kann nicht zwischen richtig und falsch unterscheiden. (Él no puede distinguir entre lo correcto y lo incorrecto.)",
         "Es ist schwer, die Zwillinge zu unterscheiden. (Es difícil distinguir a los gemelos.)"
       ]
     },
     {
       palabra: "Vergessen",
       significado: "Olvidar",
       frases: [
         "Ich habe meinen Schlüssel vergessen. (Olvidé mi llave.)",
         "Vergiss nicht, das Licht auszumachen. (No olvides apagar la luz.)",
         "Er hat seinen Termin vergessen. (Olvidó su cita.)"
       ]
     },
     {
       palabra: "Verhindern",
       significado: "Evitar, Impedir",
       frases: [
         "Der Unfall konnte nicht verhindert werden. (El accidente no pudo ser evitado.)",
         "Er versucht, das Schlimmste zu verhindern. (Él intenta evitar lo peor.)",
         "Wir müssen diese Fehler in Zukunft verhindern. (Debemos evitar estos errores en el futuro.)"
       ]
     },
     {
       palabra: "Verschwinden",
       significado: "Desaparecer",
       frases: [
         "Mein Geldbeutel ist verschwunden. (Mi billetera ha desaparecido.)",
         "Er verschwindet immer, wenn es Arbeit gibt. (Él siempre desaparece cuando hay trabajo.)",
         "Die Sonne verschwand hinter den Wolken. (El sol desapareció detrás de las nubes.)"
       ]
     },
     {
       palabra: "Verzeihen",
       significado: "Perdonar",
       frases: [
         "Kannst du mir bitte verzeihen? (¿Puedes perdonarme, por favor?)",
         "Sie hat ihm seinen Fehler verziehen. (Ella le perdonó su error.)",
         "Es ist schwer, so etwas zu verzeihen. (Es difícil perdonar algo así.)"
       ]
     },
     {
       palabra: "Widersprechen",
       significado: "Contradecir",
       frases: [
         "Er widerspricht mir ständig. (Él me contradice todo el tiempo.)",
         "Du solltest nicht immer widersprechen. (No deberías contradecir siempre.)",
         "Es ist schwer, ihm zu widersprechen. (Es difícil contradecirlo.)"
       ]
     },
     {
       palabra: "Zerstören",
       significado: "Destruir",
       frases: [
         "Der Sturm hat viele Häuser zerstört. (La tormenta destruyó muchas casas.)",
         "Er hat alle Beweise zerstört. (Él destruyó todas las pruebas.)",
         "Das Feuer hat das ganze Gebäude zerstört. (El fuego destruyó todo el edificio.)"
       ]
     },
     {
       palabra: "Zwingen",
       significado: "Obligar",
       frases: [
         "Niemand kann dich dazu zwingen. (Nadie puede obligarte a hacer eso.)",
         "Er zwang mich, die Wahrheit zu sagen. (Él me obligó a decir la verdad.)",
         "Wir sind gezwungen, eine Entscheidung zu treffen. (Estamos obligados a tomar una decisión.)"
       ]
     },
     {
       palabra: "Befehlen",
       significado: "Ordenar, Mandar",
       frases: [
         "Der König befiehlt seinem Heer zu marschieren. (El rey ordena a su ejército marchar.)",
         "Ich kann dir nichts befehlen, du bist frei. (No puedo ordenarte, eres libre.)",
         "Sie befiehlt, dass das Zimmer sauber gemacht wird. (Ella ordena que se limpie la habitación.)"
       ]
     },
     {
       palabra: "Beurteilen",
       significado: "Juzgar, Evaluar",
       frases: [
         "Man sollte Menschen nicht nach ihrem Aussehen beurteilen. (No se debería juzgar a las personas por su apariencia.)",
         "Der Lehrer beurteilt die Leistung der Schüler. (El profesor evalúa el rendimiento de los alumnos.)",
         "Es ist schwer, die Situation objektiv zu beurteilen. (Es difícil evaluar la situación objetivamente.)"
       ]
     },
     {
       palabra: "Bewältigen",
       significado: "Superar, Manejar",
       frases: [
         "Er muss viele Aufgaben gleichzeitig bewältigen. (Él tiene que manejar muchas tareas al mismo tiempo.)",
         "Wir haben es geschafft, das Problem zu bewältigen. (Logramos superar el problema.)",
         "Sie bewältigt die schwierige Situation erstaunlich gut. (Ella maneja la difícil situación sorprendentemente bien.)"
       ]
     },
     {
       palabra: "Drucken",
       significado: "Imprimir",
       frases: [
         "Kannst du das Dokument für mich drucken? (¿Puedes imprimir el documento para mí?)",
         "Die Zeitung wird täglich neu gedruckt. (El periódico se imprime diariamente.)",
         "Ich drucke die Präsentation aus. (Estoy imprimiendo la presentación.)"
       ]
     },
     {
       palabra: "Durchführen",
       significado: "Realizar, llevar a cabo",
       frases: [
         "Die Firma führt das neue Projekt durch. (La empresa está llevando a cabo el nuevo proyecto.)",
         "Wir werden den Plan wie geplant durchführen. (Vamos a realizar el plan según lo previsto.)",
         "Das Experiment wurde erfolgreich durchgeführt. (El experimento se realizó con éxito.)"
       ]
     },
     {
       palabra: "Empfehlen",
       significado: "Recomendar",
       frases: [
         "Kannst du mir ein gutes Restaurant empfehlen? (¿Puedes recomendarme un buen restaurante?)",
         "Der Arzt empfiehlt, mehr Wasser zu trinken. (El médico recomienda beber más agua.)",
         "Ich empfehle dir, dieses Buch zu lesen. (Te recomiendo que leas este libro.)"
       ]
     },
     {
       palabra: "Erfordern",
       significado: "Requerir",
       frases: [
         "Diese Aufgabe erfordert viel Geduld. (Esta tarea requiere mucha paciencia.)",
         "Das Projekt erfordert spezielle Kenntnisse. (El proyecto requiere conocimientos especiales.)",
         "Die Situation erfordert schnelle Entscheidungen. (La situación requiere decisiones rápidas.)"
       ]
     },
     {
       palabra: "Erscheinen",
       significado: "Aparecer, publicarse",
       frases: [
         "Das Buch wird nächste Woche erscheinen. (El libro se publicará la próxima semana.)",
         "Er erschien plötzlich auf der Party. (Él apareció de repente en la fiesta.)",
         "Das Magazin erscheint monatlich. (La revista se publica mensualmente.)"
       ]
     },
     {
       palabra: "Feststellen",
       significado: "Determinar, Notar",
       frases: [
         "Der Arzt stellte fest, dass er gesund ist. (El médico determinó que él está sano.)",
         "Sie stellte fest, dass ihr Schlüssel fehlte. (Ella notó que le faltaba la llave.)",
         "Wir haben festgestellt, dass das Produkt defekt ist. (Hemos determinado que el producto está defectuoso.)"
       ]
     },
     {
       palabra: "Gelten",
       significado: "Ser válido, Aplicar",
       frases: [
         "Das Angebot gilt nur bis morgen. (La oferta solo es válida hasta mañana.)",
         "Die Regeln gelten für alle. (Las reglas aplican a todos.)",
         "Dieser Pass gilt nicht mehr. (Este pasaporte ya no es válido.)"
       ]
     },
     {
       palabra: "Herstellen",
       significado: "Producir, Fabricar",
       frases: [
         "Diese Firma stellt Autos her. (Esta empresa fabrica autos.)",
         "Die Medikamente werden im Labor hergestellt. (Los medicamentos se producen en el laboratorio.)",
         "Die Firma stellt elektronische Geräte her. (La empresa fabrica dispositivos electrónicos.)"
       ]
     },
     {
       palabra: "Hinzufügen",
       significado: "Añadir, Agregar",
       frases: [
         "Möchtest du noch etwas hinzufügen? (¿Quieres añadir algo más?)",
         "Er hat seiner Rede nichts mehr hinzuzufügen. (No tiene nada más que agregar a su discurso.)",
         "Wir müssen dem Vertrag noch eine Klausel hinzufügen. (Debemos añadir una cláusula al contrato.)"
       ]
     },
     {
       palabra: "Nachdenken",
       significado: "Reflexionar, Pensar",
       frases: [
         "Ich muss über deinen Vorschlag nachdenken. (Tengo que reflexionar sobre tu propuesta.)",
         "Er denkt oft über seine Zukunft nach. (Él piensa mucho en su futuro.)",
         "Wir sollten über diese Idee nachdenken. (Deberíamos reflexionar sobre esta idea.)"
       ]
     },
     {
       palabra: "Realisieren",
       significado: "Darse cuenta, Realizar",
       frases: [
         "Sie hat nicht realisiert, dass sie zu spät ist. (Ella no se dio cuenta de que llegaba tarde.)",
         "Er realisiert seinen Traum, Musiker zu werden. (Él está cumpliendo su sueño de ser músico.)",
         "Es dauerte eine Weile, bis ich die Wahrheit realisierte. (Me llevó un tiempo darme cuenta de la verdad.)"
       ]
     },
     {
       palabra: "Scheinen",
       significado: "Parecer, Brillar",
       frases: [
         "Es scheint, als ob er die Wahrheit sagt. (Parece que él está diciendo la verdad.)",
         "Die Sonne scheint heute sehr hell. (El sol brilla muy fuerte hoy.)",
         "Es scheint, als würde es bald regnen. (Parece que va a llover pronto.)"
       ]
     },
     {
       palabra: "Schließen",
       significado: "Cerrar, Concluir",
       frases: [
         "Die Geschäfte schließen um 20 Uhr. (Las tiendas cierran a las 20 horas.)",
         "Wir schließen das Thema für heute ab. (Concluimos el tema por hoy.)",
         "Schließen Sie bitte das Fenster. (Por favor, cierre la ventana.)"
       ]
     },
     {
       palabra: "Überprüfen",
       significado: "Verificar, Comprobar",
       frases: [
         "Kannst du die Rechnung noch einmal überprüfen? (¿Puedes verificar la factura una vez más?)",
         "Der Mechaniker überprüft das Auto. (El mecánico está revisando el auto.)",
         "Wir müssen die Daten überprüfen. (Tenemos que comprobar los datos.)"
       ]
     },
     {
       palabra: "Unterbrechen",
       significado: "Interrumpir",
       frases: [
         "Entschuldigung, dass ich dich unterbreche. (Perdón por interrumpirte.)",
         "Der Strom wurde plötzlich unterbrochen. (La electricidad se interrumpió de repente.)",
         "Er unterbrach seine Arbeit, um ans Telefon zu gehen. (Él interrumpió su trabajo para contestar el teléfono.)"
       ]
     },
     {
       palabra: "Verbergen",
       significado: "Esconder, Ocultar",
       frases: [
         "Er hat nichts zu verbergen. (Él no tiene nada que esconder.)",
         "Sie versucht, ihre Gefühle zu verbergen. (Ella intenta ocultar sus sentimientos.)",
         "Er verbirgt das Geschenk hinter dem Sofa. (Él esconde el regalo detrás del sofá.)"
       ]
     },
     {
       palabra: "Verbessern",
       significado: "Mejorar, Corregir",
       frases: [
         "Ich möchte mein Deutsch verbessern. (Quiero mejorar mi alemán.)",
         "Wir müssen das System verbessern. (Debemos mejorar el sistema.)",
         "Er hat seine Fehler verbessert. (Él corrigió sus errores.)"
       ]
     },
     {
       palabra: "Verlangen",
       significado: "Exigir, Pedir",
       frases: [
         "Der Chef verlangt absolute Pünktlichkeit. (El jefe exige absoluta puntualidad.)",
         "Sie verlangt, dass wir pünktlich sind. (Ella exige que seamos puntuales.)",
         "Das Projekt verlangt viel Arbeit. (El proyecto requiere mucho trabajo.)"
       ]
     },
     {
       palabra: "Versichern",
       significado: "Asegurar",
       frases: [
         "Er versichert mir, dass alles in Ordnung ist. (Él me asegura que todo está bien.)",
         "Wir müssen das Haus gegen Feuer versichern. (Debemos asegurar la casa contra incendios.)",
         "Sie versicherte ihm, dass sie kommen würde. (Ella le aseguró que vendría.)"
       ]
     },
   /// ADJETIVOSS////////////////////
   /// ADJETIVOSS////////////////////
   /// ADJETIVOSS////////////////////
   /// ADJETIVOSS////////////////////
   {
     palabra: "Langweilig",
     significado: "Aburrido",
     frases: [
       "Die Vorlesung war sehr langweilig. (La conferencia fue muy aburrida.)",
       "Ich fand den Film langweilig. (Encontré la película aburrida.)",
       "Langweilige Aufgaben machen keinen Spaß. (Las tareas aburridas no son divertidas.)"
     ]
   },
   {
     palabra: "Fröhlich",
     significado: "Alegre",
     frases: [
       "Sie ist immer fröhlich und lächelt. (Ella siempre está alegre y sonriente.)",
       "Die fröhliche Musik bringt gute Laune. (La música alegre trae buen humor.)",
       "Er hat eine fröhliche Art zu sprechen. (Él tiene una forma alegre de hablar.)"
     ]
   },
   {
     palabra: "Verdächtig",
     significado: "Sospechoso",
     frases: [
       "Sein Verhalten war sehr verdächtig. (Su comportamiento era muy sospechoso.)",
       "Die Nachbarn fanden ihn verdächtig. (Los vecinos lo encontraron sospechoso.)",
       "Diese Information klingt verdächtig. (Esta información suena sospechosa.)"
     ]
   },
   {
     palabra: "Einfühlsam",
     significado: "Empático",
     frases: [
       "Er ist ein einfühlsamer Freund. (Él es un amigo empático.)",
       "Empathie ist wichtig in Beziehungen. (La empatía es importante en las relaciones.)",
       "Einfühlsame Menschen verstehen die Gefühle anderer. (Las personas empáticas entienden los sentimientos de los demás.)"
     ]
   },
   {
     palabra: "Aggressiv",
     significado: "Agresivo",
     frases: [
       "Sein aggressives Verhalten ist nicht akzeptabel. (Su comportamiento agresivo no es aceptable.)",
       "Manchmal kann er sehr aggressiv sein. (A veces puede ser muy agresivo.)",
       "Aggressive Menschen schaffen eine unangenehme Atmosphäre. (Las personas agresivas crean un ambiente incómodo.)"
     ]
   },
   {
     palabra: "Freundlich",
     significado: "Amable",
     frases: [
       "Sie ist immer freundlich zu allen. (Ella siempre es amable con todos.)",
       "Ein freundliches Lächeln kann viel bewirken. (Una sonrisa amable puede hacer mucho.)",
       "Die freundliche Bedienung im Restaurant hat mir gefallen. (Me gustó la atención amable en el restaurante.)"
     ]
   },
   {
     palabra: "Ehrlich",
     significado: "Honesto",
     frases: [
       "Es ist wichtig, ehrlich zu sein. (Es importante ser honesto.)",
       "Er gab eine ehrliche Antwort. (Él dio una respuesta honesta.)",
       "Ehrliche Menschen sind in der Regel vertrauenswürdig. (Las personas honestas suelen ser de confianza.)"
     ]
   },
   {
     palabra: "Sympathisch",
     significado: "Simpático",
     frases: [
       "Er ist ein sehr sympathischer Mensch. (Él es una persona muy simpática.)",
       "Ich fand die neue Kollegin sehr sympathisch. (Encontré a la nueva colega muy simpática.)",
       "Sympathische Menschen haben oft viele Freunde. (Las personas simpáticas suelen tener muchos amigos.)"
     ]
   },
   {
     palabra: "Intelligent",
     significado: "Inteligente",
     frases: [
       "Sie ist sehr intelligent und talentiert. (Ella es muy inteligente y talentosa.)",
       "Intelligente Menschen finden oft kreative Lösungen. (Las personas inteligentes a menudo encuentran soluciones creativas.)",
       "Ich bewundere seine intelligente Art zu denken. (Admiro su forma inteligente de pensar.)"
     ]
   },
   {
     palabra: "Zärtlich",
     significado: "Tierno",
     frases: [
       "Das Kind ist sehr zärtlich zu seinen Freunden. (El niño es muy tierno con sus amigos.)",
       "Zärtliche Gesten können viel bedeuten. (Los gestos tiernos pueden significar mucho.)",
       "Er hat eine zärtliche Art, seine Liebe zu zeigen. (Él tiene una forma tierna de mostrar su amor.)"
     ]
   },
   {
     palabra: "Ehrgeizig",
     significado: "Ambicioso",
     frases: [
       "Sie ist eine ehrgeizige Studentin. (Ella es una estudiante ambiciosa.)",
       "Ehrgeizige Menschen setzen sich hohe Ziele. (Las personas ambiciosas se establecen altas metas.)",
       "Sein ehrgeiziger Plan beeindruckte alle. (Su plan ambicioso impresionó a todos.)"
     ]
   },
   {
     palabra: "Neugierig",
     significado: "Curioso",
     frases: [
       "Das Kind ist sehr neugierig auf die Welt. (El niño es muy curioso sobre el mundo.)",
       "Neugierige Menschen lernen schneller. (Las personas curiosas aprenden más rápido.)",
       "Ich bin neugierig, was du denkst. (Tengo curiosidad por saber qué piensas.)"
     ]
   },
   {
     palabra: "Geduldig",
     significado: "Paciente",
     frases: [
       "Sie ist sehr geduldig mit ihren Schülern. (Ella es muy paciente con sus alumnos.)",
       "Geduld ist eine wichtige Tugend. (La paciencia es una virtud importante.)",
       "Manchmal muss man geduldig sein. (A veces hay que ser paciente.)"
     ]
   },
   {
     palabra: "Unabhängig",
     significado: "Independiente",
     frases: [
       "Sie ist eine unabhängige Frau. (Ella es una mujer independiente.)",
       "Ich möchte finanziell unabhängig sein. (Quiero ser financieramente independiente.)",
       "Unabhängige Entscheidungen zu treffen ist wichtig. (Tomar decisiones independientes es importante.)"
     ]
   },
   {
     palabra: "Anspruchsvoll",
     significado: "Exigente",
     frases: [
       "Der Lehrer ist sehr anspruchsvoll. (El maestro es muy exigente.)",
       "Das Projekt war anspruchsvoll und herausfordernd. (El proyecto fue exigente y desafiante.)",
       "Anspruchsvolle Kunden sind schwer zufriedenzustellen. (Los clientes exigentes son difíciles de satisfacer.)"
     ]
   },
   {
     palabra: "Vorsichtig",
     significado: "Cuidadoso",
     frases: [
       "Sei vorsichtig mit dem Feuer. (Ten cuidado con el fuego.)",
       "Er fährt vorsichtig in der Stadt. (Él conduce con cuidado en la ciudad.)",
       "Vorsichtige Menschen vermeiden Risiken. (Las personas cuidadosas evitan riesgos.)"
     ]
   },
   {
     palabra: "Kreativ",
     significado: "Creativo",
     frases: [
       "Kreative Menschen finden oft neue Ideen. (Las personas creativas a menudo encuentran nuevas ideas.)",
       "Ich mag kreative Lösungen für Probleme. (Me gustan las soluciones creativas para los problemas.)",
       "Er hat eine kreative Art, Dinge zu gestalten. (Él tiene una forma creativa de diseñar cosas.)"
     ]
   },
   {
     palabra: "Verantwortlich",
     significado: "Responsable",
     frases: [
       "Sie ist verantwortlich für das Projekt. (Ella es responsable del proyecto.)",
       "Verantwortliche Menschen nehmen ihre Pflichten ernst. (Las personas responsables se toman en serio sus responsabilidades.)",
       "Es ist wichtig, verantwortungsbewusst zu handeln. (Es importante actuar de manera responsable.)"
     ]
   },
   {
     palabra: "Optimistisch",
     significado: "Optimista",
     frases: [
       "Er ist sehr optimistisch über die Zukunft. (Él es muy optimista sobre el futuro.)",
       "Optimistische Menschen sehen das Positive. (Las personas optimistas ven lo positivo.)",
       "Ich versuche, in schwierigen Zeiten optimistisch zu bleiben. (Intento mantenerme optimista en tiempos difíciles.)"
     ]
   },
   {
     palabra: "Traurig",
     significado: "Triste",
     frases: [
       "Sie sieht traurig aus. (Ella parece triste.)",
       "Traurige Musik kann berühren. (La música triste puede tocar el corazón.)",
       "Es ist normal, manchmal traurig zu sein. (Es normal estar triste a veces.)"
     ]
   },
   {
     palabra: "Ehrfurchtgebietend",
     significado: "Impresionante",
     frases: [
       "Die Natur kann ehrfurchtgebietend sein. (La naturaleza puede ser impresionante.)",
       "Sein Talent ist wirklich ehrfurchtgebietend. (Su talento es realmente impresionante.)",
       "Die Ehrfurcht gebietende Landschaft nahm mir den Atem. (El paisaje impresionante me dejó sin aliento.)"
     ]
   },
   {
     palabra: "Dynamisch",
     significado: "Dinámico",
     frases: [
       "Sie hat einen dynamischen Lebensstil. (Ella tiene un estilo de vida dinámico.)",
       "Dynamische Unternehmen passen sich schnell an. (Las empresas dinámicas se adaptan rápidamente.)",
       "Der dynamische Vortrag hielt die Aufmerksamkeit der Zuhörer. (La presentación dinámica mantuvo la atención de los oyentes.)"
     ]
   },
   {
     palabra: "Unabhängig",
     significado: "Independiente",
     frases: [
       "Ich möchte unabhängig sein. (Quiero ser independiente.)",
       "Unabhängige Menschen treffen ihre eigenen Entscheidungen. (Las personas independientes toman sus propias decisiones.)",
       "Das Land strebt nach unabhängiger Politik. (El país busca una política independiente.)"
     ]
   },
   {
     palabra: "Motiviert",
     significado: "Motivado",
     frases: [
       "Er ist motiviert, seine Ziele zu erreichen. (Él está motivado para alcanzar sus metas.)",
       "Motivierte Mitarbeiter sind produktiver. (Los empleados motivados son más productivos.)",
       "Ich fühle mich motiviert, mehr zu lernen. (Me siento motivado para aprender más.)"
     ]
   },
   {
     palabra: "Flexibel",
     significado: "Flexible",
     frases: [
       "Sie hat einen flexiblen Arbeitszeitplan. (Ella tiene un horario de trabajo flexible.)",
       "Flexibles Denken ist wichtig in schwierigen Situationen. (El pensamiento flexible es importante en situaciones difíciles.)",
       "Ich bin flexibel mit meinen Plänen. (Soy flexible con mis planes.)"
     ]
   },
   
     {
       palabra: "Unhöflich",
       significado: "maleducado",
       frases: [
         "Es ist unhöflich, jemanden zu unterbrechen. (Es maleducado interrumpir a alguien.)",
         "Der Kellner war sehr unhöflich zu den Gästen. (El camarero fue muy maleducado con los invitados.)",
         "Sein unhöfliches Verhalten hat alle gestört. (Su comportamiento maleducado molestó a todos.)"
       ]
     },
     {
       palabra: "Unordentlich",
       significado: "Desordenado",
       frases: [
         "Sein Zimmer ist immer unordentlich. (Su habitación siempre está desordenada.)",
         "Sie ist eine sehr unordentliche Person. (Ella es una persona muy desordenada.)",
         "Ich fühle mich unwohl, wenn mein Schreibtisch unordentlich ist. (Me siento incómodo cuando mi escritorio está desordenado.)"
       ]
     },
     {
       palabra: "Klug",
       significado: "Inteligente",
       frases: [
         "Er ist ein sehr kluger Junge. (Él es un chico muy inteligente.)",
         "Sie hat eine kluge Entscheidung getroffen. (Ella tomó una decisión inteligente.)",
         "Klug zu sein hilft, aber es reicht nicht aus. (Ser inteligente ayuda, pero no es suficiente.)"
       ]
     },
     {
       palabra: "Mutig",
       significado: "Valiente",
       frases: [
         "Der Soldat war sehr mutig im Kampf. (El soldado fue muy valiente en la batalla.)",
         "Es war mutig von ihr, die Wahrheit zu sagen. (Fue valiente por su parte decir la verdad.)",
         "Manchmal muss man mutig sein, um das Richtige zu tun. (A veces hay que ser valiente para hacer lo correcto.)"
       ]
     },
     {
       palabra: "Ehrlich",
       significado: "Honesto",
       frases: [
         "Er ist immer ehrlich, auch wenn es schwer ist. (Él siempre es honesto, aunque sea difícil.)",
         "Sei ehrlich, hast du das wirklich gemacht? (Sé honesto, ¿realmente lo hiciste?)",
         "Ehrliche Menschen sind selten. (Las personas honestas son raras.)"
       ]
     },
     {
       palabra: "Faul",
       significado: "Perezoso",
       frases: [
         "Er ist zu faul, um seine Hausaufgaben zu machen. (Él es demasiado perezoso para hacer sus deberes.)",
         "An einem regnerischen Tag werde ich oft faul. (En un día lluvioso a menudo me vuelvo perezoso.)",
         "Faule Menschen erreichen selten ihre Ziele. (Las personas perezosas rara vez alcanzan sus metas.)"
       ]
     },
     {
       palabra: "Laut",
       significado: "Ruidoso",
       frases: [
         "Das Restaurant ist sehr laut. (El restaurante es muy ruidoso.)",
         "Die Musik war zu laut. (La música estaba demasiado alta.)",
         "Er redet immer laut am Telefon. (Siempre habla en voz alta por teléfono.)"
       ]
     },
     {
       palabra: "Ruhig",
       significado: "Tranquilo",
       frases: [
         "Das Meer war heute sehr ruhig. (El mar estaba muy tranquilo hoy.)",
         "Er ist eine ruhige Person, die selten wütend wird. (Él es una persona tranquila, que rara vez se enoja.)",
         "Der Wald war ruhig und friedlich. (El bosque estaba tranquilo y pacífico.)"
       ]
     },
     {
       palabra: "Großzügig",
       significado: "Generoso",
       frases: [
         "Sie war immer sehr großzügig zu uns. (Ella siempre fue muy generosa con nosotros.)",
         "Es war großzügig von dir, uns zu helfen. (Fue generoso de tu parte ayudarnos.)",
         "Großzügige Menschen werden oft respektiert. (Las personas generosas suelen ser respetadas.)"
       ]
     },
     {
       palabra: "Gierig",
       significado: "Avaro, Codicioso",
       frases: [
         "Er ist gierig nach Macht. (Él es codicioso de poder.)",
         "Gierige Menschen sind oft unglücklich. (Las personas codiciosas a menudo son infelices.)",
         "Er isst so gierig, als wäre es sein letztes Mahl. (Él come con tanta avidez, como si fuera su última comida.)"
       ]
     },
     {
       palabra: "Ehrgeizig",
       significado: "Ambicioso",
       frases: [
         "Sie ist eine ehrgeizige Schülerin. (Ella es una estudiante ambiciosa.)",
         "Sein Ehrgeiz treibt ihn immer weiter. (Su ambición lo impulsa siempre hacia adelante.)",
         "Ehrgeizige Menschen erreichen oft viel. (Las personas ambiciosas a menudo logran mucho.)"
       ]
     },
     {
       palabra: "Geduldig",
       significado: "Paciente",
       frases: [
         "Man muss geduldig sein, um ein gutes Ergebnis zu erzielen. (Hay que ser paciente para obtener un buen resultado.)",
         "Sie war sehr geduldig mit den Kindern. (Ella fue muy paciente con los niños.)",
         "Geduld ist eine Tugend. (La paciencia es una virtud.)"
       ]
     },
     {
       palabra: "Ungeduldig",
       significado: "Impaciente",
       frases: [
         "Er ist immer ungeduldig, wenn er warten muss. (Siempre está impaciente cuando tiene que esperar.)",
         "Sie wurde ungeduldig, als das Gespräch länger dauerte. (Se volvió impaciente cuando la conversación se alargó.)",
         "Ungeduldige Menschen machen oft Fehler. (Las personas impacientes a menudo cometen errores.)"
       ]
     },
     {
       palabra: "Zufrieden",
       significado: "Satisfecho",
       frases: [
         "Ich bin mit dem Ergebnis sehr zufrieden. (Estoy muy satisfecho con el resultado.)",
         "Bist du mit deinem Leben zufrieden? (¿Estás satisfecho con tu vida?)",
         "Sie war zufrieden mit ihrer Entscheidung. (Ella estaba satisfecha con su decisión.)"
       ]
     },
     {
       palabra: "Wütend",
       significado: "Furioso",
       frases: [
         "Er war wütend, weil sie zu spät kam. (Él estaba furioso porque ella llegó tarde.)",
         "Sie wurde wütend, als sie die Nachricht hörte. (Se enfureció cuando escuchó la noticia.)",
         "Manchmal wird er sehr schnell wütend. (A veces se enfada muy rápido.)"
       ]
     },
     {
       palabra: "Stolz",
       significado: "Orgulloso",
       frases: [
         "Er ist stolz auf seinen Erfolg. (Él está orgulloso de su éxito.)",
         "Sie war stolz auf ihre Kinder. (Ella estaba orgullosa de sus hijos.)",
         "Wir sind stolz auf das, was wir erreicht haben. (Estamos orgullosos de lo que hemos logrado.)"
       ]
     },
     {
       palabra: "Schüchtern",
       significado: "Tímido",
       frases: [
         "Sie ist zu schüchtern, um mit Fremden zu sprechen. (Ella es demasiado tímida para hablar con extraños.)",
         "Er wird oft schüchtern in großen Gruppen. (Él a menudo se pone tímido en grandes grupos.)",
         "Schüchterne Menschen brauchen manchmal etwas mehr Zeit. (Las personas tímidas a veces necesitan un poco más de tiempo.)"
       ]
     },
     {
       palabra: "Arrogant",
       significado: "arrogante",
       frases: [
         "Er verhält sich oft arrogant. (Él a menudo se comporta de manera arrogante.)",
         "Seine arrogante Art hat viele Leute verärgert. (Su manera arrogante molestó a muchas personas.)",
         "Arrogante Menschen haben oft wenig Freunde. (Las personas arrogantes a menudo tienen pocos amigos.)"
       ]
     },
     {
       palabra: "Bescheiden",
       significado: "aodesto",
       frases: [
         "Sie ist trotz ihres Erfolgs sehr bescheiden. (A pesar de su éxito, ella es muy modesta.)",
         "Er lebt ein bescheidenes Leben. (Él lleva una vida modesta.)",
         "Bescheidene Menschen sind oft die erfolgreichsten. (Las personas modestas a menudo son las más exitosas.)"
       ]
     },
     {
       palabra: "Neugierig",
       significado: "Curioso",
       frases: [
         "Das Kind ist sehr neugierig und stellt viele Fragen. (El niño es muy curioso y hace muchas preguntas.)",
         "Neugierige Menschen lernen oft mehr. (Las personas curiosas a menudo aprenden más.)",
         "Bist du nicht neugierig, was sie gesagt haben? (¿No tienes curiosidad por saber lo que dijeron?)"
       ]
     },
     {
       palabra: "Entspannt",
       significado: "Relajado",
       frases: [
         "Er fühlt sich nach dem Urlaub sehr entspannt. (Se siente muy relajado después de las vacaciones.)",
         "Das Wochenende war sehr entspannt. (El fin de semana fue muy relajado.)",
         "Entspannte Menschen leben gesünder. (Las personas relajadas viven más sanas.)"
       ]
     },
     {
       palabra: "Anstrengend",
       significado: "Agotador",
       frases: [
         "Die Wanderung war sehr anstrengend. (La caminata fue muy agotadora.)",
         "Die Arbeit heute war anstrengend. (El trabajo de hoy fue agotador.)",
         "Es war ein anstrengender Tag. (Fue un día agotador.)"
       ]
     },
     {
       palabra: "Tapfer",
       significado: "Valeroso",
       frases: [
         "Der Hund war tapfer, als er sein Herrchen beschützte. (El perro fue valeroso cuando protegió a su dueño.)",
         "Sie ist eine tapfere Frau. (Ella es una mujer valiente.)",
         "Tapfere Menschen haben keine Angst vor Gefahren. (Las personas valerosas no tienen miedo a los peligros.)"
       ]
     },
     {
       palabra: "Schüchtern",
       significado: "Tímido",
       frases: [
         "Er ist zu schüchtern, um mit Fremden zu sprechen. (Él es demasiado tímido para hablar con extraños.)",
         "Das Kind war anfangs schüchtern, aber dann öffnete es sich. (El niño era tímido al principio, pero luego se soltó.)",
         "Ich war früher sehr schüchtern. (Solía ser muy tímido.)"
       ]
     },
   
   ];

// Función que convierte la lista de palabras al formato deseado
function transformarPalabras(palabras) {
  return palabras.map(item => {
    return `{
      palabra: "${item.palabra}",
      significado: "${item.significado}",
      ejemplo1: "${item.frases[0]}",
      ejemplo2: "${item.frases[1]}",
      ejemplo3: "${item.frases[2]}",
      deleted: false,
      likes: 0
    }`;
  }).join(',\n');
}

// Transforma las palabras
const palabrasTransformadas = transformarPalabras(palabras);

// Crea el contenido para el archivo .txt
const contenido = `[${palabrasTransformadas}]`;

// Guarda el contenido en un archivo .txt
fs.writeFileSync('palabras.txt', contenido);

console.log('El archivo palabras.txt ha sido creado.');