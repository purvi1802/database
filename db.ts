import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: 'purvi',
        Age: 18,
        role: 'USER',
      },
    });

    const newewUser = await prisma.user.create({
        data: {
          name: 'alpha',
          Age: 20,
          role: 'USER',
        },
      });

    console.log('New user created:', newUser);
    console.log('New user created:', newewUser);

    const newPost = await prisma.post.create({
      data: {
        title: 'STREET VIEW APP DATABASE',
        content: 'be positive',
        userId: newUser.id
      },
    });

    const newewPost = await prisma.post.create({
        data: {
          title: 'STREET VIEW APP DATABASE',
          content: 'be positive',
          userId: newewUser.id
        },
      });

    console.log('New post created:', newPost);
    console.log('New post created:', newewPost);

    const deletedUser = await prisma.user.delete({
      where: {
        id: newUser.id,
      },
    });

    console.log('User deleted:', deletedUser);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
