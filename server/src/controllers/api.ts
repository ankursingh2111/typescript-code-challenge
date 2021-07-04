import { callApi } from '../services/callApi';
import express from 'express';
import { ErrorResponse, OutputOrderData, Customer } from 'src/records';

export default async function get(req: express.Request, res: express.Response) {
  let response: Customer[] | OutputOrderData[] = [];
  let errorResponse = {} as ErrorResponse;
  let status: number = 200;
  try {
    // Get response from repository
    response = await callApi(req.params.service);
  } catch (err) {
    if (err.message.startsWith('Unknown API')) {
      // An error has occured. Report that.
      status = 404;
      errorResponse = {
        error: 'Not found',
        reason: err.message,
      };
    } else {
      // An error has occured. Report that.
      status = 500;
      errorResponse = {
        error: 'Internal Server Error',
        reason: err.message,
      };
    }
  }

  if (status !== 200) res.json(errorResponse);
  else res.json(response);
  res.status(status);
}
