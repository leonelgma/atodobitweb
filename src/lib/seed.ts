import { prisma } from "./prisma"
import bcrypt from "bcryptjs"

export async function seedDatabase() {
  try {
    // Crear usuarios de ejemplo
    const hashedPassword = await bcrypt.hash("password123", 12)

    const admin = await prisma.user.upsert({
      where: { email: "admin@atodobit.com" },
      update: {},
      create: {
        name: "Admin AtodoBit",
        email: "admin@atodobit.com",
        password: hashedPassword,
        role: "ADMIN",
      },
    })

    const teacher = await prisma.user.upsert({
      where: { email: "teacher@atodobit.com" },
      update: {},
      create: {
        name: "Profesor Juan",
        email: "teacher@atodobit.com",
        password: hashedPassword,
        role: "TEACHER",
      },
    })

    const student = await prisma.user.upsert({
      where: { email: "student@atodobit.com" },
      update: {},
      create: {
        name: "Estudiante María",
        email: "student@atodobit.com",
        password: hashedPassword,
        role: "STUDENT",
      },
    })

    // Crear cursos de ejemplo
    const course1 = await prisma.course.upsert({
      where: { id: "course-1" },
      update: {},
      create: {
        id: "course-1",
        title: "JavaScript Moderno",
        description: "Aprende JavaScript desde cero hasta nivel avanzado",
        duration: 1200, // 20 horas
        level: "BEGINNER",
        isPublished: true,
        instructorId: teacher.id,
      },
    })

    const course2 = await prisma.course.upsert({
      where: { id: "course-2" },
      update: {},
      create: {
        id: "course-2",
        title: "React Avanzado",
        description: "Patrones avanzados y optimización en React",
        duration: 1800, // 30 horas
        level: "INTERMEDIATE",
        isPublished: true,
        instructorId: teacher.id,
      },
    })

    const course3 = await prisma.course.upsert({
      where: { id: "course-3" },
      update: {},
      create: {
        id: "course-3",
        title: "Node.js y Express",
        description: "Backend development con Node.js",
        duration: 1500, // 25 horas
        level: "ADVANCED",
        isPublished: true,
        instructorId: teacher.id,
      },
    })

    // Crear lecciones para el primer curso
    const lessons = [
      {
        title: "Introducción a JavaScript",
        description: "Conceptos básicos y sintaxis",
        duration: 60,
        order: 1,
        courseId: course1.id,
        isPublished: true,
      },
      {
        title: "Variables y Tipos de Datos",
        description: "Declaración de variables y tipos primitivos",
        duration: 45,
        order: 2,
        courseId: course1.id,
        isPublished: true,
      },
      {
        title: "Funciones",
        description: "Declaración y uso de funciones",
        duration: 90,
        order: 3,
        courseId: course1.id,
        isPublished: true,
      },
    ]

    for (const lesson of lessons) {
      await prisma.lesson.upsert({
        where: { 
          courseId_order: {
            courseId: lesson.courseId,
            order: lesson.order,
          }
        },
        update: {},
        create: lesson,
      })
    }

    // Crear inscripciones
    await prisma.enrollment.upsert({
      where: {
        userId_courseId: {
          userId: student.id,
          courseId: course1.id,
        }
      },
      update: {},
      create: {
        userId: student.id,
        courseId: course1.id,
        status: "ACTIVE",
      },
    })

    await prisma.enrollment.upsert({
      where: {
        userId_courseId: {
          userId: student.id,
          courseId: course2.id,
        }
      },
      update: {},
      create: {
        userId: student.id,
        courseId: course2.id,
        status: "ACTIVE",
      },
    })

    console.log("✅ Base de datos sembrada exitosamente")
  } catch (error) {
    console.error("❌ Error sembrando la base de datos:", error)
  }
}

