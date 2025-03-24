import { Request, Response } from 'express';
import { Job } from '../models/Job.js';
import { validateJobCreation } from '../validators/job.js';

export const createJob = async (req: Request, res: Response) => {
  try {
    const validatedData = validateJobCreation(req.body);
    const job = await Job.create({
      ...validatedData,
      employerId: req.user!.id,
    });

    res.status(201).json({
      message: 'Job created successfully',
      job,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.findAll({
      order: [['createdAt', 'DESC']],
    });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.json(job);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.employerId !== req.user!.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const validatedData = validateJobCreation(req.body);
    await job.update(validatedData);

    res.json({
      message: 'Job updated successfully',
      job,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  try {
    const job = await Job.findByPk(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    if (job.employerId !== req.user!.id) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await job.destroy();
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};